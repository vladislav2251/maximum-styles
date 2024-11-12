<script>
    export let translation;
</script>
<div class="py-12">
    <h2 class="text-2xl font-bold text-center">{translation?.createCategory?.title}</h2>

    <form>
        <div class="grid gap-5 pt-12 place-items-center">
            <input required class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)]" type="text" placeholder="{translation?.createCategory?.inputs[0]?.placeholder}">
            <input required class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)]" type="text" placeholder="{translation?.createCategory?.inputs[1]?.placeholder}">
            <button type="submit" class="px-8 py-4 bg-[var(--color-violet)] w-full md:w-3/4 rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105">{translation?.createCategory?.create}</button>
        </div>    
    </form>
</div>