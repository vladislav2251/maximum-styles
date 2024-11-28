<script>
  import { deleteProduct } from '@/stores/main.js';
  import { goto } from '$app/navigation';

  export let products;
  export let fetchProducts;
  let showModal = false;
  let productToDelete = null;

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
      <h2 class="text-xl font-bold mb-4">Confirm Deletion</h2>
      <p class="mb-6">Are you sure you want to delete this product?</p>
      <div class="flex justify-end space-x-2">
        <button
          class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          on:click={closeModal}
        >
          Cancel
        </button>
        <button
          class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          on:click={confirmDelete}
        >
          Delete
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
        <th class="p-2 text-left">Name</th>
        <th class="p-2 text-left">Manufacturer ID</th>
        <th class="p-2 text-left">Category ID</th>
        <th class="p-2 text-left">Short Description (DE)</th>
        <th class="p-2 text-left">Regular Price</th>
        <th class="p-2 text-left">Specialist Price</th>
        <th class="p-2 text-left">Photo</th>
        <th class="p-2 text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each products as product, index}
        <tr class={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
          <td class="p-2">{product._id}</td>
          <td class="p-2">{product.name}</td>
          <td class="p-2">{product.manufacturer_id}</td>
          <td class="p-2">{product.category_id}</td>
          <td class="p-2">{product.description.short?.de || 'N/A'}</td>
          <td class="p-2">{product.price.regular}</td>
          <td class="p-2">{product.price.specialist}</td>
          <td class="p-2">
            <img
              class="object-contain h-12"
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
              Edit
            </button>
            <button
              class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              on:click={() => openDeleteModal(product._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
