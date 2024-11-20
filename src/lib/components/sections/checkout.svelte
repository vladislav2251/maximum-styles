<script>
  export let products;
  export let account;
  export let translation;
  import { addProduct, removeProductFromCart } from '@stores/main.js';
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
    //Change this to whatever new endpoint you have for updating the amount in cart
    await addProduct({ account_id, product_id, amount });
  }, 500);

  const removeProduct = async (product_id) => {
    await removeProductFromCart(account_id, product_id);
  };
</script>

<div class="container mx-auto p-6">
  <h5 class="font-medium text-[40px] mb-8">{translation?.cart?.title}</h5>

  {#if products.length > 0}
    <div class="flex flex-col gap-8">
      <div class="flex justify-between mb-5">
        <button on:click={() => window.history.back()} type="button">
          {translation?.cart?.back}
        </button>
        <button type="button">{translation?.cart?.restore}</button>
      </div>

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
                      if (amount === 1) {
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
                  <p class="text-xl">{amount * price.regular}$</p>
                  <p class="text-base text-[var(--color-gray100)] line-through">
                    {price.discount.regular
                      ? amount *
                          price.regular *
                          (1 - price.discount.regular / 100) +
                        '$'
                      : null}
                  </p>
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

      <!-- <form class="mt-8 grid gap-5 md:w-3/4"> -->
      <!--   <div class="flex flex-col gap-3"> -->
      <!--     <label for="displayName">{translation?.cart?.inputs[0]?.label}</label> -->
      <!--     <input -->
      <!--       class="px-8 py-4 border border-gray-300 rounded-md" -->
      <!--       type="text" -->
      <!--       id="displayName" -->
      <!--       name="displayName" -->
      <!--       required -->
      <!--       minlength="2" -->
      <!--       maxlength="30" -->
      <!--       placeholder={translation?.cart?.inputs[0]?.placeholder} -->
      <!--     /> -->
      <!--   </div> -->
      <!--   <div class="flex flex-col gap-3"> -->
      <!--     <label for="email">{translation?.cart?.inputs[1]?.label}</label> -->
      <!--     <input -->
      <!--       class="px-8 py-4 border border-gray-300 rounded-md" -->
      <!--       type="email" -->
      <!--       id="email" -->
      <!--       name="email" -->
      <!--       required -->
      <!--       placeholder={translation?.cart?.inputs[1]?.placeholder} -->
      <!--     /> -->
      <!--   </div> -->
      <!--   <div class="flex flex-col gap-3"> -->
      <!--     <label for="phone">{translation?.cart?.inputs[2]?.label}</label> -->
      <!--     <input -->
      <!--       class="px-8 py-4 border border-gray-300 rounded-md" -->
      <!--       type="tel" -->
      <!--       id="phone" -->
      <!--       name="phone" -->
      <!--       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" -->
      <!--       required -->
      <!--       placeholder={translation?.cart?.inputs[2]?.placeholder} -->
      <!--     /> -->
      <!--   </div> -->
      <!---->
      <!--   <button -->
      <!--     class="px-8 py-4 bg-violet-600 text-white rounded-sm hover:bg-violet-700" -->
      <!--     type="submit" -->
      <!--   > -->
      <!--     {translation?.main?.profile?.change} -->
      <!--   </button> -->
      <!-- </form> -->
    </div>
  {:else}
    <div class="text-center">
      <h2>{translation?.cart?.empty}</h2>
    </div>
  {/if}
</div>
