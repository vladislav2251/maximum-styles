<script>
    import { onMount } from "svelte";
    let selectedImage = null;
    import "@fancyapps/ui/dist/fancybox/fancybox.css";


    onMount(async () => {
        const { Fancybox } = await import("@fancyapps/ui");
        Fancybox.bind("[data-fancybox]", {});
    });

    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            selectedImage = URL.createObjectURL(file);
        }
    }

    export let translation;
</script>

<div class="py-12">
    <h2 class="text-2xl font-bold text-center">{translation?.createProduct?.title}</h2>

    <form>
        <div class="grid gap-5 pt-12 place-items-center">
            <input required class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)]" type="text" placeholder="{translation?.createProduct?.inputs[0]?.placeholder}">
            <textarea required name="description" class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)]" placeholder="{translation?.createProduct?.inputs[1]?.placeholder}"></textarea>
            <textarea required name="description" class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)]" placeholder="{translation?.createProduct?.inputs[2]?.placeholder}"></textarea>
            <textarea required name="description" class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)]" placeholder="{translation?.createProduct?.inputs[3]?.placeholder}"></textarea>
            <input required class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)]" type="text" placeholder="{translation?.createProduct?.inputs[4]?.placeholder}">
            <input required class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)]" type="text" placeholder="{translation?.createProduct?.inputs[5]?.placeholder}">
            <input required class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)]" type="text" placeholder="{translation?.createProduct?.inputs[6]?.placeholder}">

            <div class="flex gap-5">
                <input required type="file" accept="image/*" on:change={handleImageUpload} class="hidden" id="image-upload" />
                {#if !selectedImage}
                    <label for="image-upload" class="flex flex-col gap-3 items-center justify-center w-32 h-32 border-2 border-dashed border-[var(--color-gray)] rounded-md text-center cursor-pointer p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />      
                        </svg>
                    </label>
                {/if}

                {#if selectedImage}
                    <a href={selectedImage} data-fancybox data-caption="Selected Image" class="mt-4">
                        <img src={selectedImage} alt="Selected Image" class="w-32 h-32 object-cover rounded-md shadow-md" />
                    </a>
                {/if}
            </div>

            <button type="submit" class="px-8 py-4 bg-[var(--color-violet)] w-full md:w-3/4 rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105">{translation?.createProduct?.btn}</button>
        </div>    
    </form>
</div>
