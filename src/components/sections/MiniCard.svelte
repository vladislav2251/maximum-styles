<div class="relative w-60 h-80 p-1 shadow-md">
    <button
        type="button"
        class="absolute top-3 right-3 bg-transparent p-0 cursor-pointer w-6 h-6"
        aria-pressed={isLiked}
        on:click={toggleLike}
        title={isLiked ? "Unlike" : "Like"}
    >
        {#if isLiked}
            <img src="/svg/liked.svg" alt="Liked" class="icon">
        {:else}
            <img src="/svg/like.svg" alt="Not liked" class="icon">
        {/if}
    </button>

    <img class="h-auto w-full object-cover" src={img} alt={label}>

    <div class="container">
        <h2 class="text-[var(--color-black)] font-medium text-sm max-h-12 overflow-hidden text-ellipsis whitespace-nowrap">Гель-лак Milk Shine Bright 430 Freckle Stars</h2>

        <div class="flex justify-between mt-5 items-center">
            <h2 class="text-[var(--color-red)] text-xl font-bold">{price} $</h2>
            <a href="/product">
                <p class="text-[var(--color-gray200)] font-medium text-sm">В КОРЗИНУ</p>
            </a>
        </div>
    </div>
</div>
<script>
    export let img;
    export let label;
    export let price;

    let isLiked = false; 

    function toggleLike() {
        isLiked = !isLiked;
    }
</script>