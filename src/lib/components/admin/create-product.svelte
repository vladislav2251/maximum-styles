<script>
    import {onMount} from "svelte";
    import "@fancyapps/ui/dist/fancybox/fancybox.css";
    import {getCategories, getManufacturers} from "../../../stores/main.js";

    export let translation;

    onMount(async () => {
        const {Fancybox} = await import("@fancyapps/ui");
        Fancybox.bind("[data-fancybox]", {});
    });

    let selectedImage = null;

    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            selectedImage = URL.createObjectURL(file);
        }
    }

    const getManufacturerAndCategory = async () => {
        const [manufacturer, category] = await Promise.all([
            getManufacturers(),
            getCategories(),
        ])
        return {manufacturer, category};
    };


    async function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const values = {};

        formData.forEach((value, key) => {
            values[key] = value;
        });

        const product = {
            name: values.name,
            category_id: 1,
            manufacturer_id: 1,
            description: {
                short: {
                    de: values.short_desc,
                    bg: values.short_desc
                },
                detail: {
                    de: values.detail_desc,
                    bg: values.detail_desc
                },
                usage: {
                    de: values.usage_desc,
                    bg: values.usage_desc
                },
                ingredients: {
                    de: values.ingredients_desc,
                    bg: values.ingredients_desc
                }
            },
            price: {
                regular: values.regular_price,
                specialist: values.specialist_price,
                discount: {
                    regular: values.discount_price ? values.discount_price : 0,
                    specialist: values.specialist_discount ? values.specialist_discount : 0
                }
            },
            photo: values.image.name,
            photos: [values.image.name]
        }
    }

    export let product;
</script>

{#if product}
    <h1>{product.name}</h1>
{/if}

<div class="py-12">
    <h2 class="text-2xl font-bold text-center">{translation?.createProduct?.title}</h2>

    <form class="flex items-center flex-col justify-center gap-4" on:submit={handleSubmit}>
        <fieldset class="flex items-center justify-center w-full gap-2 flex-col md:flex-row">
            <legend class="text-lg font-semibold">Product Information</legend>

            <input id="name" required name="name"
                   class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
                   type="text" placeholder="{translation?.createProduct?.inputs[0]?.placeholder}">
            <input id="category" required name="category"
                   class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
                   type="text" placeholder="{translation?.createProduct?.inputs[5]?.placeholder}">
            <input id="brand" required name="brand"
                   class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
                   type="text" placeholder="{translation?.createProduct?.inputs[6]?.placeholder}">
        </fieldset>

        <fieldset class="flex items-center justify-center w-full gap-2 flex-col md:flex-row">
            <legend class="text-lg font-semibold">Pricing</legend>

            <input id="regular_price" required name="regular_price"
                   class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
                   type="text" placeholder="{translation?.createProduct?.inputs[4]?.placeholder}">
            <input id="discount_price" required name="discount_price"
                   class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
                   type="text" placeholder="Discount">
            <input id="specialist_price" required name="specialist_price"
                   class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
                   type="text" placeholder="Specialist Price">
            <input id="specialist_discount" required name="specialist_discount"
                   class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
                   type="text" placeholder="Specialist Discount">
        </fieldset>

        <fieldset class="flex items-center justify-center flex-col w-full gap-2">
            <legend class="text-lg font-semibold">Description</legend>

            <textarea id="detail_desc" required name="detail_desc"
                      class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
                      placeholder="{translation?.createProduct?.inputs[1]?.placeholder}"></textarea>
            <textarea id="short_desc" required name="short_desc"
                      class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
                      placeholder="short description"></textarea>
            <textarea id="usage_desc" required name="usage_desc"
                      class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
                      placeholder="{translation?.createProduct?.inputs[2]?.placeholder}"></textarea>
            <textarea id="ingredients_desc" required name="ingredients_desc"
                      class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
                      placeholder="{translation?.createProduct?.inputs[3]?.placeholder}"></textarea>
        </fieldset>

        <fieldset class="flex items-center justify-center w-full mb-3">
            <legend class="text-lg font-semibold">Images</legend>

            <div class="flex gap-5">
                <input required type="file" accept="image/*" on:change={handleImageUpload} class="hidden" name="image"
                       id="image-upload"/>
                {#if !selectedImage}
                    <label for="image-upload"
                           class="flex flex-col gap-3 items-center justify-center w-32 h-32 border-2 border-dashed border-[var(--color-gray)] rounded-md text-center cursor-pointer p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                        </svg>
                    </label>
                {/if}

                {#if selectedImage}
                    <a href={selectedImage} data-fancybox data-caption="Selected Image" class="mt-4">
                        <img src={selectedImage} alt="Selected Image"
                             class="w-32 h-32 object-cover rounded-md shadow-md"/>
                    </a>
                {/if}
            </div>
        </fieldset>

        <button type="submit" class="px-8 py-4 bg-[var(--color-violet)] md:w-3/4 rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105;
      }">{translation?.createProduct?.btn}</button>
    </form>
</div>
