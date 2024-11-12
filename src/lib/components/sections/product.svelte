<div
    role="link"
    tabindex="0"
    on:click={onclickRedirect}
    on:keydown={(e) => e.key === 'Enter' && onclickRedirect()}
    class="relative w-60 h-80 p-[12px_16px_20px_16px] shadow-xl items-center hover:cursor-pointer hover:scale-105 transition-all duration-300"
    aria-label={`View product ${product.name}`}
>
    <!-- <button -->
    <!--     type="button" -->
    <!--     class="absolute top-3 right-3 bg-transparent p-0 cursor-pointer w-6 h-6" -->
    <!--     aria-pressed={isLiked} -->
    <!--     on:click={toggleLike} -->
    <!--     title={isLiked ? "Unlike" : "Like"} -->
    <!-- > -->
    <!--     <img -->
    <!--         src={isLiked ? "/svg/liked.svg" : "/svg/like.svg"} -->
    <!--         alt={isLiked ? "Liked" : "Not liked"} -->
    <!--         class={`icon transition-transform duration-300 ${isLiked ? 'transform scale-125' : ''}`} -->
    <!--     > -->
    <!-- </button> -->

  <img class="h-[184px] w-[140px] m-auto object-cover" src='http://192.168.1.15:3000/img/image.jpg' alt={product.label}>

  <h2 class="w-full text-wrap max-h-[42px] text-black font-medium m-[28px_0_10px_0] text-sm overflow-hidden text-ellipsis whitespace-nowrap">
    {product.name}
  </h2>

  <div class="flex justify-between items-center">
    <h2 class="text-red-500 text-xl font-bold">{product.price.regular} $</h2>
    <a href={`/product/${product._id}`}>
      <p class="text-gray-600 mt-[7px] font-medium text-[18px] leading-7">{translation?.main?.cart?.to_cart}</p>
    </a>
  </div>
</div>

<script>
    export let translation;
    export let product;
    import { goto} from "$app/navigation";

    function onclickRedirect() {
        goto(`/product/${product._id}`);
    }
    // let isLiked = false;

    // function toggleLike() {
    //     isLiked = !isLiked;
    // }
</script>
