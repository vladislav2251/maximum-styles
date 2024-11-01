<div class="relative w-60 h-80 p-1 shadow-md">
    <button
        type="button"
        class="absolute top-3 right-3 bg-transparent p-0 cursor-pointer w-6 h-6"
        aria-pressed={isLiked}
        on:click={toggleLike}
        title={isLiked ? "Unlike" : "Like"}
    >
        <img
            src={isLiked ? "/svg/liked.svg" : "/svg/like.svg"}
            alt={isLiked ? "Liked" : "Not liked"}
            class={`icon transition-transform duration-300 ${isLiked ? 'transform scale-125' : ''}`}
        >
    </button>

    <img class="h-auto w-full object-cover" src={img} alt={label}>

    <div class="container">
        <h2 class="text-black font-medium text-sm max-h-12 overflow-hidden text-ellipsis whitespace-nowrap">
            {label}
        </h2>

        <div class="flex justify-between mt-5 items-center">
            <h2 class="text-red-500 text-xl font-bold">{price} $</h2>
            <a href="/product">
                <p class="text-gray-600 font-medium text-sm">{translation?.main?.card?.in_cart}</p>
            </a>
        </div>
    </div>
</div>

<script>
    export let img;
    export let label;
    export let price;
    export let translation;

    let isLiked = false;

    function toggleLike() {
        isLiked = !isLiked;
    }
</script>