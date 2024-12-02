<script>
  import { updateProduct } from '@/stores/main.js';
  import ProductModal from './modal.svelte';
  import FeedbackModal from './feedback-modal.svelte';
  import { goto } from '$app/navigation';

  export let translation;
  export let product;
  export let manufacturers;
  export let categories;

  let productInfo;
  let feedbackModalOpen = false;
  let feedbackMessage = '';
  let feedbackType = 'success';

  const descriptionFields = [
    { key: 'detail', label: 'placeholder1' },
    { key: 'short', label: 'placeholder2' },
    { key: 'usage', label: 'placeholder3' },
    { key: 'ingredients', label: 'placeholder4' },
  ];

  async function handleSubmit(event) {
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());

    productInfo = {
      name: values.name,
      photo: product.photo,
      photos: product.photos,
      category_id: Number(values.category),
      manufacturer_id: Number(values.manufacturer),
      description: {
        short: { de: values.short_de, bg: values.short_bg },
        detail: { de: values.detail_de, bg: values.detail_bg },
        usage: { de: values.usage_de, bg: values.usage_bg },
        ingredients: { de: values.ingredients_de, bg: values.ingredients_bg },
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

  async function handleConfirm(updatedProduct) {
    try {
      await updateProduct(product._id, updatedProduct);
      feedbackMessage = 'Product created successfully!';
      feedbackType = 'success';
    } catch (error) {
      if (error.status === 422) {
        const fieldErrors = error.response?.data?.detail || [];
        const errorMessages = fieldErrors
          .map((field) => `${field.loc[1]}: ${field.msg}`)
          .join('');
        feedbackMessage =
          error.message +
          ' Which means that you are missing some required fields. ' +
          errorMessages;
        feedbackType = 'error';
      } else {
        feedbackMessage =
          error.message || 'Something went wrong. Please try again later.';
        feedbackType = 'error';
      }
    } finally {
      feedbackModalOpen = true;
    }
  }
</script>

<div class="py-12 flex flex-col">
  <ProductModal bind:productInfo onConfirm={handleConfirm} />
  <FeedbackModal
    bind:isOpen={feedbackModalOpen}
    message={feedbackMessage}
    type={feedbackType}
  />

  <h2 class="text-2xl font-bold text-center">
    {translation?.editProduct?.title}
  </h2>

  <form
    class="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4"
    on:submit|preventDefault={handleSubmit}
  >
    <button
      class="px-6 py-2 w-24 bg-[var(--color-primary-300)] text-white rounded hover:bg-opacity-90 transition-colors"
      on:click={() => {
        goto('/admin/products/');
      }}
      type="button"
    >
      {'←'}
    </button>

    <fieldset class="md:col-span-2 flex flex-col gap-2">
      <legend class="text-lg font-semibold">
        {translation?.createProduct?.title}
      </legend>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="name">{translation?.createProduct?.inputs[0].label}</label
          >
          <input
            id="name"
            name="name"
            class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
            type="text"
            value={product.name}
            placeholder={translation?.createProduct?.inputs[0].placeholder}
          />
        </div>
        <div>
          <label for="category"
            >{translation?.createProduct?.inputs[1].label}</label
          >
          <select
            id="category"
            name="category"
            class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
          >
            {#each categories as category}
              <option
                value={category._id}
                selected={category._id === product.category_id}
              >
                {category.name.de}/{category.name.bg}
              </option>
            {/each}
          </select>
        </div>
        <div>
          <label for="manufacturer">
            {translation?.createProduct?.inputs[2].label}
          </label>
          <select
            id="manufacturer"
            name="manufacturer"
            class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
          >
            {#each manufacturers as manufacturer}
              <option
                value={manufacturer._id}
                selected={manufacturer._id === product.manufacturer_id}
              >
                {manufacturer.name.de}/{manufacturer.name.bg}
              </option>
            {/each}
          </select>
        </div>
      </div>
    </fieldset>

    <fieldset class="flex flex-col gap-2">
      <legend class="text-lg font-semibold">
        {translation?.createProduct?.title2}
      </legend>
      <input
        id="regular_price"
        name="regular_price"
        value={product.price.regular}
        class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
        type="text"
        placeholder={translation?.createProduct?.inputs[3]?.placeholder}
      />
      <input
        id="discount_price"
        name="discount_price"
        value={product.price.discount.regular}
        class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
        type="text"
        placeholder={translation?.createProduct?.inputs[5]?.placeholder}
      />
    </fieldset>

    <fieldset class="flex flex-col gap-2">
      <legend class="text-lg font-semibold">
        {translation?.createProduct?.inputs[4]?.placeholder}
      </legend>
      <input
        id="specialist_price"
        name="specialist_price"
        value={product.price.specialist}
        class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
        type="text"
        placeholder={translation?.createProduct?.inputs[4]?.label1}
      />
      <input
        id="specialist_discount"
        name="specialist_discount"
        value={product.price.discount.specialist}
        class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
        type="text"
        placeholder={translation?.createProduct?.inputs[4]?.label2}
      />
    </fieldset>

    {#each ['de', 'bg'] as lang}
      <fieldset class="md:col-span-2 flex flex-col gap-2">
        <legend class="text-lg font-semibold">
          {translation?.createProduct?.inputs[6]?.[
            lang === 'de' ? 'label' : 'label1'
          ]}
        </legend>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {#each descriptionFields as field}
            <textarea
              id="{field.key}_{lang}"
              name="{field.key}_{lang}"
              value={product.description[field.key][lang]}
              class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
              placeholder={translation?.createProduct?.inputs[6]?.[field.label]}
            ></textarea>
          {/each}
        </div>
      </fieldset>
    {/each}

    <div class="md:col-span-2 flex justify-center">
      <button
        type="submit"
        class="px-6 py-2 bg-[var(--color-primary-300)] text-white rounded hover:bg-opacity-90 transition-colors"
      >
        {translation?.createProduct?.btn?.edit}
      </button>
    </div>
  </form>
</div>
