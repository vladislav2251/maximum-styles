<script>
  import { deleteProduct } from '@/stores/main.js';
  import { goto } from '$app/navigation';
  import { language } from '$lib/context/store.js';

  export let products;
  export let fetchProducts;
  export let translation;
  let showModal = false;
  let productToDelete = null;

  let currentLang;
  language.subscribe((lang) => {
    currentLang = lang.code;
  });

  function handleEdit(productId) {
    goto(`product/edit/${productId}`);
  }

  async function confirmDelete() {
    if (productToDelete) {
      await deleteProduct(productToDelete);
      showModal = false;
      productToDelete = null;
    }
    await fetchProducts();
  }

  function openDeleteModal(productId) {
    productToDelete = productId;
    showModal = true;
  }

  function closeModal() {
    showModal = false;
    productToDelete = null;
  }
</script>

{#if showModal}
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white p-6 rounded-lg shadow-xl">
      <h2 class="text-xl font-bold mb-4">
        {translation?.dashboard?.productsTable?.deleteModal?.title}
      </h2>
      <p class="mb-6">
        {translation?.dashboard?.productsTable?.deleteModal?.description}
      </p>
      <div class="flex justify-end space-x-2">
        <button
          class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          on:click={closeModal}
        >
          {translation?.dashboard?.productsTable?.deleteModal?.cancel}
        </button>
        <button
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          on:click={confirmDelete}
        >
          {translation?.dashboard?.productsTable?.deleteModal?.delete}
        </button>
      </div>
    </div>
  </div>
{/if}

<div class="w-full overflow-auto">
  <table class="min-w-[1244px] table-auto">
    <thead class="bg-gray-100">
      <tr>
        <th class="p-2 text-left">ID</th>
        <th class="p-2 text-left"
          >{translation?.dashboard?.productsTable?.name}</th
        >
        <th class="p-2 text-left"
          >{translation?.dashboard?.productsTable?.manufacturerId} ID</th
        >
        <th class="p-2 text-left"
          >{translation?.dashboard?.productsTable?.categoryId} ID</th
        >
        <th class="p-2 text-left"
          >{translation?.dashboard?.productsTable?.short +
            ` (${currentLang})`}</th
        >
        <th class="p-2 text-left"
          >{translation?.dashboard?.productsTable?.regularPrice}</th
        >
        <th class="p-2 text-left"
          >{translation?.dashboard?.productsTable?.specialistPrice}</th
        >
        <th class="p-2 text-left"
          >{translation?.dashboard?.productsTable?.photo}</th
        >
        <th class="p-2 text-left"
          >{translation?.dashboard?.productsTable?.actions}</th
        >
      </tr>
    </thead>
    <tbody>
      {#each products as product, index}
        <tr class={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
          <td class="p-2">{product._id}</td>
          <td class="p-2">{product.name}</td>
          <td class="p-2">{product.manufacturer_id}</td>
          <td class="p-2">{product.category_id}</td>
          <td class="p-2">{product.description.short[currentLang] || 'N/A'}</td>
          <td class="p-2">{product.price.regular}</td>
          <td class="p-2">{product.price.specialist}</td>
          <td class="p-2 w-36">
            <img
              class="object-contain w-full h-16"
              src={product.photo}
              alt={product.name}
              width="50"
            />
          </td>
          <td class="p-2 flex flex-col gap-2">
            <button
              class="mr-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              on:click={() => handleEdit(product._id)}
            >
              {translation?.dashboard?.productsTable?.edit}
            </button>
            <button
              class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              on:click={() => openDeleteModal(product._id)}
            >
              {translation?.dashboard?.productsTable?.delete}
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
