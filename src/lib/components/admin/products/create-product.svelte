<script>
  import { createProduct } from '@/stores/main.js';

  export let translation;
  export let manufacturers;
  export let categories;
  let showModal = false;
  let productInfo;
  let activeDescription = 'short';

  function setActiveDescription(key) {
    activeDescription = key;
  }

  const descriptionFields = [
    { key: 'detail', label: 'placeholder1' },
    { key: 'short', label: 'placeholder2' },
    { key: 'usage', label: 'placeholder3' },
    { key: 'ingredients', label: 'placeholder4' },
  ];

  async function handleSubmit(event) {
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());

    const product = {
      name: values.name,
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
    productInfo = product;
    toggleModal();
  }
  function toggleModal() {
    showModal = !showModal;
  }
</script>

<div class="py-12">
  {#if showModal}
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl">
        <h2 class="text-xl font-bold mb-4">Is this your product?</h2>
        <div class="flex">
          <!-- Product Image -->
          <div class="w-1/3">
            <img
              src={productInfo?.image ||
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Z_PIeIRDajXPmZHROt-T_QHaEK%26pid%3DApi&f=1&ipt=0beb80e57b255a0459ebeee9c25b323f3803107df58e3d4d971f65106a8efedf&ipo=images'}
              alt="Product"
              class="w-full h-auto object-contain rounded-lg"
            />
          </div>

          <!-- Product Details -->
          <div class="w-2/3 pl-6">
            <h2 class="text-2xl font-bold mb-2">{productInfo?.name}</h2>
            <p><strong>Category:</strong> {productInfo?.category_id}</p>
            <p><strong>Manufacturer:</strong> {productInfo?.manufacturer_id}</p>
            <p>
              <strong>Regular Price:</strong> ${productInfo?.price.regular}
            </p>
            <p>
              <strong>Specialist Price:</strong>
              ${productInfo?.price.specialist}
            </p>
            {#if productInfo?.price.discount.regular > 0 || productInfo?.price.discount.specialist > 0}
              <p>
                <strong>Discounts:</strong>
                Regular: {productInfo?.price.discount.regular}%,<br />
                Specialist: {productInfo?.price.discount.specialist}%
              </p>
            {/if}
          </div>
        </div>

        <!-- Description Toggle -->
        <div class="mt-6">
          <div class="flex gap-2 flex-wrap max-w-md">
            {#each ['short', 'detail', 'usage', 'ingredients'] as key}
              <button
                class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 focus:bg-gray-400"
                class:font-bold={activeDescription === key}
                on:click={() => setActiveDescription(key)}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            {/each}
          </div>
          <span
            class="font-semibold
            ">Bulgarian</span
          >
          <div class="mt-4 p-4 border rounded bg-gray-100">
            {@html productInfo?.description[activeDescription]?.de ||
              'No description available'}
          </div>
          <span class="font-semibold">Germany</span>
          <div class="mt-4 p-4 border rounded bg-gray-100">
            {@html productInfo?.description[activeDescription]?.bg ||
              'No description available'}
          </div>
        </div>

        <!-- Modal Actions -->
        <div class="flex justify-end space-x-2 mt-6">
          <button
            class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            on:click={toggleModal}
          >
            Cancel
          </button>
          <button
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            on:click={async () => {
              await createProduct(productInfo);
              toggleModal();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  {/if}

  <h2 class="text-2xl font-bold text-center">
    {translation?.editProduct?.title}
  </h2>

  <form
    class="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-4"
    on:submit|preventDefault={handleSubmit}
  >
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
            required
            name="name"
            class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
            type="text"
            placeholder={translation?.createProduct?.inputs[0].placeholder}
          />
        </div>
        <div>
          <label for="category"
            >{translation?.createProduct?.inputs[1].label}</label
          >
          <select
            id="category"
            required
            name="category"
            class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
          >
            {#each categories as category}
              <option value={category._id}>
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
            required
            name="manufacturer"
            class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
          >
            {#each manufacturers as manufacturer}
              <option value={manufacturer._id}>
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
        required
        name="regular_price"
        class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
        type="text"
        placeholder={translation?.createProduct?.inputs[3]?.placeholder}
      />
      <input
        id="discount_price"
        required
        name="discount_price"
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
        required
        name="specialist_price"
        class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)];"
        type="text"
        placeholder={translation?.createProduct?.inputs[4]?.label1}
      />
      <input
        id="specialist_discount"
        required
        name="specialist_discount"
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
              required
              name="{field.key}_{lang}"
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
        {translation?.createProduct?.btn?.create}
      </button>
    </div>
  </form>
</div>
