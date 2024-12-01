<script>
  export let products;
  export let account;
  export let translation;
  import { updateAmountInCart, removeProductFromCart } from '@stores/main.js';
  let allProducts = products ?? [];
  $: total = allProducts.reduce(
    (acc, item) => acc + item.price.regular * item.amount,
    0
  );
  $: totalSale = allProducts.reduce(
    (acc, item) => acc + item.price.discount.regular * item.amount,
    0
  );
  $: vat = (total * 0.2).toFixed(2);

  const account_id = account._id;

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  const saveInDb = debounce(async (product_id, amount) => {
    const response = await updateAmountInCart(account_id, product_id, amount);
    if (response.ok) {
      allProducts = response.cart.products;
    }
  }, 500);

  const removeProduct = async (product_id) => {
    const response = await removeProductFromCart(account_id, product_id);
    if (response.ok) {
      allProducts = response.cart.products;
    }
  };
</script>

<div class="container mx-auto p-6">
  <h5 class="font-medium text-[40px] mb-8">{translation?.cart?.title}</h5>

  {#if products.length > 0}
    <div class="flex flex-col gap-8">
      <button
        class="px-6 py-2 w-32 bg-[var(--color-primary-300)] text-white rounded hover:bg-gray-700 hover:scale-x-105 transition-all"
        on:click={() => window.history.back()}
        type="button"
      >
        {'←'}
      </button>

      <div class="flex gap-8">
        <div class="flex-1">
          <div class="max-h-[300px] overflow-scroll">
            {#each allProducts as { _id, photo, name, price, sale, amount }, index}
              <div
                class="flex items-center max-sm:flex-col max-sm:gap-1 justify-between md:grid md:grid-cols-5 border-b border-solid border-[var(--color-white200)] py-3 px-5"
              >
                <button
                  class="sm:hidden grid place-content-end w-full"
                  type="button"
                  on:click={() => removeProduct(_id)}>✕</button
                >
                <img src={photo} alt={name} />
                <h2 class="text-base">{name}</h2>
                <div
                  class="flex max-w-40 gap-3 px-3 py-1 border border-solid border-[var(--color-gray)] items-center justify-between rounded-lg"
                >
                  <button
                    class="text-2xl font-semibold"
                    on:click={() => {
                      if (amount === -1) {
                        return;
                      }
                      amount--;
                      saveInDb(_id, amount);
                    }}>-</button
                  >
                  <h2 class="text-xl font-semibold">{amount}</h2>
                  <button
                    class="text-2xl font-semibold"
                    on:click={() => {
                      amount++;
                      saveInDb(_id, amount);
                    }}>+</button
                  >
                </div>
                <div class="flex sm:flex-col gap-2 items-center">
                  {#if price.discount.regular !== 0}
                    <p class="text-xl">
                      {amount *
                        price.regular *
                        (1 - price.discount.regular / 100) +
                        '$'}
                    </p>
                    <p
                      class="text-base text-[var(--color-gray100)] line-through"
                    >
                      {amount * price.regular}$
                    </p>
                  {:else}
                    <p class="text-xl">{amount * price.regular}$</p>
                  {/if}
                </div>
                <button
                  class="max-sm:hidden"
                  type="button"
                  on:click={() => removeProduct(_id)}>✕</button
                >
              </div>
            {/each}
          </div>
        </div>

        <div class="w-[30%] p-4 border border-gray-300 rounded-md">
          <div class="flex justify-between items-center">
            <p>{translation?.cart?.order_number}</p>
            <p>{Math.random().toString(36).substr(2, 9)}</p>
          </div>
          <div class="flex justify-between items-center">
            <p>{translation?.cart?.sum}</p>
            <p>${total}</p>
          </div>
          <div class="flex justify-between items-center">
            <p>{translation?.cart?.sale}</p>
            <p>${totalSale}</p>
          </div>
          <div class="flex justify-between items-center">
            <p>{translation?.cart?.vat}</p>
            <p>${vat}</p>
          </div>
          <div
            class="flex justify-between items-center border-t border-gray-200 pt-3"
          >
            <p>{translation?.cart?.total}</p>
            <p>${Number(total) - Number(totalSale) + Number(vat)}</p>
          </div>
          <button
            type="button"
            class="px-8 py-4 bg-[var(--color-violet)] w-full rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105"
            >{translation?.main?.cart?.btn}
          </button>
        </div>
      </div>
    </div>
  {:else}
    <div class="text-center">
      <h2>{translation?.cart?.empty}</h2>
    </div>
  {/if}
</div>
