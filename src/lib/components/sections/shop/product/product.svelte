<script>
  import { goto } from '$app/navigation';
  import { addProduct } from '@stores/main';
  export let translation;
  export let product;
  export let account;

  function onclickRedirect() {
    if (product?._id) {
      goto(`/product/${product._id}`);
    }
  }
  const addToCart = async (product_id) => {
    if (!account?._id) goto('/sign-in');
    await addProduct({
      account_id: account._id,
      product_id,
      amount: 1,
    });
  };
</script>

<div
  role="link"
  tabindex="0"
  on:click={onclickRedirect}
  on:keydown={(e) => e.key === 'Enter' && onclickRedirect()}
  class="relative w-60 h-80 p-[12px_16px_20px_16px] shadow items-center hover:cursor-pointer hover:shadow-2xl transition-all duration-300"
  aria-label={`View product ${product.name || 'Без имени'}`}
>
  <img
    class="max-h-[184px] w-full m-auto object-contain"
    height="184"
    width="208"
    src={product?.photo || '/default-image.jpg'}
    alt={product?.label || 'Без описания'}
  />

  <div class="flex justify-between flex-col max-h-24">
    <h2
      class="w-full text-wrap max-h-[42px] text-black font-medium m-[28px_0_10px_0] text-sm overflow-hidden text-ellipsis whitespace-nowrap"
    >
      {product?.name || 'Без имени'}
    </h2>

    <div class="flex justify-between items-center">
      <h2 class="text-red-500 text-xl font-bold">
        {product?.price?.regular || 'Цена не указана'} $
      </h2>
      <button
        type="button"
        on:click={(e) => {
          e.stopPropagation();
          addToCart(product._id);
        }}
        class="text-gray-600 mt-[7px] font-medium text-[18px] leading-7"
      >
        {translation?.main?.cart?.to_cart || 'Добавить в корзину'}
      </button>
    </div>
  </div>
</div>
