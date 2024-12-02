<script>
  export let isOpen = false;
  export let message = '';
  export let type = 'success';
  export let translation;

  function closeModal() {
    isOpen = false;
  }
</script>

{#if isOpen}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    on:click|self={closeModal}
  >
    <div
      class="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4
      {type === 'success'
        ? 'border-2 border-green-500'
        : 'border-2 border-red-500'}"
    >
      <div class="flex justify-between items-center mb-4">
        <h2
          class="text-xl font-bold {type === 'success'
            ? 'text-green-600'
            : 'text-red-600'}"
        >
          {type === 'success'
            ? `${translation?.createProduct?.feedbackModal?.success}`
            : `${translation?.createProduct?.feedbackModal?.error}`}
        </h2>
        <button on:click={closeModal} class="text-gray-500 hover:text-gray-700">
          ✕
        </button>
      </div>
      <p class="text-gray-700">{message}</p>
      <div class="mt-4 flex justify-end">
        <button
          on:click={closeModal}
          class="px-4 py-2 rounded {type === 'success'
            ? 'bg-green-500 text-white hover:bg-green-600'
            : 'bg-red-500 text-white hover:bg-red-600'}"
        >
          {translation?.createProduct?.feedbackModal?.ok}
        </button>
      </div>
    </div>
  </div>
{/if}
