<script>
    let counter = 0;

    function changeCounter(type) {
        if (type === 'plus') {
            counter = counter === 25 ? counter : counter + 1;
        } else if (type === 'minus') {
            counter = counter === 0 ? counter : counter - 1;
        }
    }
</script>

<div class="flex max-w-40 gap-6 px-6 py-3 border border-solid border-[var(--color-gray)] items-center justify-between rounded-lg">
    <button class="text-2xl font-semibold" on:click={() => changeCounter('plus')}>+</button>
    <h2 class="text-xl font-semibold">{counter}</h2>
    <button class="text-2xl font-semibold" on:click={() => changeCounter('minus')}>-</button>
</div>
