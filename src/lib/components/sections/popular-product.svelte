<script>
  export let translation;

  export let img;
  export let label;
  export let description;
  export let price;
</script>

<div class="border border-solid border-[var(--color-gray)]">
  <div class="overflow-hidden">
    <img
      style="width: -webkit-fill-available;"
      class="transirion-all duration-500 hover:scale-105"
      src={img}
      alt={label}
    />
  </div>
  <div class="container py-4 md:p-5">
    <h2 class="text-[var(--color-gray800)] font-medium text-4xl">{label}</h2>
    <p class="text-[var(--color-gray200)] font-normal text-xl">{description}</p>
    <div
      class="flex max-xl:flex-col items-start xl:items-center max-md:gap-1 justify-between"
    >
      <div class="flex gap-2 items-center my-5">
        <a href="/product">
          <button
            type="button"
            class="bg-[var(--color-violet)] px-8 py-4 flex justify-between items-center border border-solid border-[var(--color-gray)] transition-all duration-300 hover:bg-[var(--color-purple)]"
            >{translation?.main?.popular_product?.buy_now}</button
          >
        </a>
        <a href="/cart">
          <button
            type="button"
            class="bg-[var(--color-white)] px-8 py-4 flex justify-between items-center border border-solid border-[var(--color-gray)] transition-all duration-300 hover:bg-[var(--color-white200)]"
            >{translation?.main?.popular_product?.add_to_cart}</button
          >
        </a>
      </div>
      <h2
        class="text-[var(--color-gray800)] font-semibold text-2xl md:text-3xl"
      >
        ${price}
      </h2>
    </div>
  </div>
</div>

<style lang="css">
  p {
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
</style>
