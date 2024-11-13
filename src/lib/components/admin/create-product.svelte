<script>
  import { onMount } from 'svelte';
  import { getCategories, getManufacturers } from '@/stores/main.js';

  export let translation;

  let page = 1;
  let manufacturers = [];
  let categories = [];

  const nextPage = () => {
    page++;
  };
  const previousPage = () => {
    page--;
  };

  onMount(async () => {
    const [manufacturer, category] = await Promise.all([
      getManufacturers(),
      getCategories(),
    ]);

    manufacturers = manufacturer;
    categories = category;
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const values = {};

    formData.forEach((value, key) => {
      values[key] = value;
    });

    const product = {
      name: values.name,
      category_id: Number(values.category),
      manufacturer_id: Number(values.manufacturer),
      description: {
        short: {
          de: values.short_de,
          bg: values.short_bg,
        },
        detail: {
          de: values.detail_de,
          bg: values.detail_bg,
        },
        usage: {
          de: values.usage_de,
          bg: values.usage_bg,
        },
        ingredients: {
          de: values.ingredients_de,
          bg: values.ingredients_bg,
        },
      },
      price: {
        regular: Number(values.regular_price),
        specialist: Number(values.specialist_price),
        discount: {
          regular: values.discount_price ? Number(values.discount_price) : 0,
          specialist: values.specialist_discount
            ? Number(values.specialist_discount)
            : 0,
        },
      },
    };
  }
</script>

<div class="py-12">
  <h2 class="text-2xl font-bold text-center">
    {translation?.editProduct?.title}
  </h2>

  <form
    class="flex items-center flex-col justify-center gap-4"
    on:submit={handleSubmit}
  >
    <fieldset
      class="flex items-center justify-center w-full gap-2 flex-col md:flex-row page"
      class:show={page === 1}
    >
      <legend class="text-lg font-semibold"
        >{translation?.createProduct?.title}</legend
      >

      <label for="name">{translation?.createProduct?.inputs[0].label}</label>
      <input
        id="name"
        required
        name="name"
        class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
        type="text"
        placeholder={translation?.createProduct?.inputs[0].placeholder}
      />
      <label for="category">{translation?.createProduct?.inputs[1].label}</label
      >
      <select
        id="category"
        required
        name="category"
        class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
      >
        {#each categories as category}
          <option value={category._id}
            >{category.name.de}/{category.name.bg}</option
          >
        {/each}
      </select>
      <label for="manufacturer"
        >{translation?.createProduct?.inputs[2].label}</label
      >
      <select
        id="manufacturer"
        required
        name="manufacturer"
        class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
      >
        {#each manufacturers as manufacturer}
          <option value={manufacturer._id}
            >{manufacturer.name.de}/{manufacturer.name.bg}</option
          >
        {/each}
      </select>
    </fieldset>

    <fieldset
      class="flex items-center justify-center w-full gap-2 flex-col md:flex-row page"
      class:show={page === 2}
    >
      <legend class="text-lg font-semibold"
        >{translation?.createProduct?.title2}</legend
      >

      <div
        class="flex flex-col w-full gap-4 items-center"
        role="group"
        aria-labelledby="pricing_for_regulars"
      >
        <p id="pricing_for_regulars">
          {translation?.createProduct?.inputs[3]?.placeholder}
        </p>
        <input
          id="regular_price"
          required
          name="regular_price"
          class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
          type="text"
          placeholder={translation?.createProduct?.inputs[4]?.placeholder}
        />
        <input
          id="discount_price"
          required
          name="discount_price"
          class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
          type="text"
          placeholder={translation?.createProduct?.inputs[5]?.placeholder}
        />
      </div>
      <div
        class="flex flex-col w-full gap-4 items-center"
        role="group"
        aria-labelledby="pricing_for_specialists"
      >
        <p id="pricing_for_specialists">
          {translation?.createProduct?.inputs[4]?.placeholder}
        </p>
        <input
          id="specialist_price"
          required
          name="specialist_price"
          class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
          type="text"
          placeholder={translation?.createProduct?.inputs[4]?.label1}
        />
        <input
          id="specialist_discount"
          required
          name="specialist_discount"
          class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
          type="text"
          placeholder={translation?.createProduct?.inputs[4]?.label2}
        />
      </div>
    </fieldset>

    <fieldset
      class="flex items-center justify-center flex-col w-full gap-2 page"
      class:show={page === 3}
    >
      <legend class="text-lg font-semibold"
        >{translation?.createProduct?.inputs[6]?.label}</legend
      >

      <textarea
        id="detail_de"
        required
        name="detail_de"
        class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
        placeholder={translation?.createProduct?.inputs[6]?.placeholder1}
      ></textarea>
      <textarea
        id="short_de"
        required
        name="short_de"
        class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
        placeholder={translation?.createProduct?.inputs[6]?.placeholder2}
      ></textarea>
      <textarea
        id="usage_de"
        required
        name="usage_de"
        class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
        placeholder={translation?.createProduct?.inputs[6]?.placeholder3}
      ></textarea>
      <textarea
        id="ingredients_de"
        required
        name="ingredients_de"
        class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
        placeholder={translation?.createProduct?.inputs[6]?.placeholder4}
      ></textarea>
    </fieldset>

    <fieldset
      class="flex items-center justify-center flex-col w-full gap-2 page"
      class:show={page === 4}
    >
      <legend class="text-lg font-semibold"
        >{translation?.createProduct?.inputs[6]?.label1}</legend
      >

      <textarea
        id="detail_bg"
        required
        name="detail_bg"
        class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
        placeholder={translation?.createProduct?.inputs[6]?.placeholder1}
      ></textarea>
      <textarea
        id="short_bg"
        required
        name="short_bg"
        class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
        placeholder={translation?.createProduct?.inputs[6]?.placeholder2}
      ></textarea>
      <textarea
        id="usage_bg"
        required
        name="usage_bg"
        class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
        placeholder={translation?.createProduct?.inputs[6]?.placeholder3}
      ></textarea>
      <textarea
        id="ingredients_bg"
        required
        name="ingredients_bg"
        class="px-8 py-4 border-solid outline-none text-base w-full md:w-3/4 border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
        placeholder={translation?.createProduct?.inputs[6]?.placeholder4}
      ></textarea>
    </fieldset>

    <button type="submit" class="page" class:show={page === 4}
      >{translation?.createProduct?.btn?.create}</button
    >
    <button on:click={nextPage} class:page={page === 4} disabled={page === 4}
      >{translation?.createProduct?.btn?.next}</button
    >
    <button
      on:click={previousPage}
      class:page={page === 1}
      disabled={page === 1}>{translation?.createProduct?.btn?.prev}</button
    >
  </form>
</div>

<style>
  .page {
    display: none;
  }
  .page.show {
    display: contents;
  }
</style>
