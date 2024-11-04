
<div class="flex">
    <input type="search" name="input" id="search" placeholder={translation?.main?.search?.placeholder} class="px-8 py-4 cursor-pointer outline-none w-full bg-[var(--color-white100)]">
    <button type="submit" name="button" class="px-8 py-4 justify-center flex items-center hover:bg-[var(--color-gray800)] transition-all duration-300 hover:scale-x-105 bg-[var(--color-black)] text-[var(--color-white)]">{translation?.main?.search?.label}</button>
</div>
<script>
    export let translation;
</script>
