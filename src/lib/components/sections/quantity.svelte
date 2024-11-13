<script>
  export let quantity = 1;
  export let max = 25;
  export let onChange;

  function changeCounter(type) {
    if (type === 'plus' && quantity < max) {
      quantity += 1;
    } else if (type === 'minus' && quantity > 1) {
      quantity -= 1;
    }

    // Передаём новое значение количества в родительский компонент
    if (onChange) onChange(quantity);
  }
</script>

<div
  class="flex max-w-40 gap-3 px-3 py-1 border border-solid border-[var(--color-gray)] items-center justify-between rounded-lg"
>
  <button class="text-2xl font-semibold" on:click={() => changeCounter('minus')}
    >-</button
  >
  <h2 class="text-xl font-semibold">{quantity}</h2>
  <button class="text-2xl font-semibold" on:click={() => changeCounter('plus')}
    >+</button
  >
</div>
