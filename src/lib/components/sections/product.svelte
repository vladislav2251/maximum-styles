<script>
  import { goto } from '$app/navigation';

  export let translation;  // Переводы
  export let addToCart;    // Функция добавления в корзину
  export let product;      // Данные одного продукта

  // Функция для редиректа на страницу с деталями продукта
  function onclickRedirect() {
    if (product?._id) {
      goto(`/product/${product._id}`);
    }
  }

  console.log(product);  // Для отладки
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
    class="h-[184px] w-[140px] m-auto object-cover"
    src={product?.photo || '/default-image.jpg'} 
    alt={product?.label || 'Без описания'}
  />

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
        e.stopPropagation();  // Останавливаем событие от всплытия
        addToCart(product._id);  // Добавляем в корзину
      }}
      class="text-gray-600 mt-[7px] font-medium text-[18px] leading-7"
    >
      {translation?.main?.cart?.to_cart || 'Добавить в корзину'}
    </button>
  </div>
</div>
