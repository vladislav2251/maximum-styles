<script>
  import { goto } from '$app/navigation';
  export let translation;
  export let product;
  export let addToCart;

  function onclickRedirect() {
    goto(`/product/${product._id}`);
  }
</script>

<div
  role="link"
  tabindex="0"
  on:click={onclickRedirect}
  on:keydown={(e) => e.key === 'Enter' && onclickRedirect()}
  class="relative w-60 h-80 p-[12px_16px_20px_16px] shadow-xl items-center hover:cursor-pointer hover:shadow-2xl transition-all duration-300"
  aria-label={`View product ${product.name}`}
>
  <img
    class="h-[184px] w-[140px] m-auto object-cover"
    src="http://192.168.1.15:3000/img/image.jpg"
    alt={product.label}
  />

  <h2
    class="w-full text-wrap max-h-[42px] text-black font-medium m-[28px_0_10px_0] text-sm overflow-hidden text-ellipsis whitespace-nowrap"
  >
    {product.name}
  </h2>

  <div class="flex justify-between items-center">
    <h2 class="text-red-500 text-xl font-bold">{product.price.regular} $</h2>
    <button
      type="button"
      on:click={(e) => {
        e.stopPropagation();
        addToCart(product._id);
      }}
      class="text-gray-600 mt-[7px] font-medium text-[18px] leading-7"
    >
      {translation?.main?.cart?.to_cart}
    </button>
  </div>
</div>
