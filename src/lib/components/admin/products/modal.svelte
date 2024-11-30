<script>
  export let productInfo = null;
  export let onConfirm = () => {};
  let showModal = false;
  let activeDescription = 'short';

  function setActiveDescription(key) {
    activeDescription = key;
  }

  function toggleModal() {
    showModal = !showModal;
  }

  $: if (productInfo) {
    showModal = true;
  }

  function generateImagePreview(file) {
    return file ? URL.createObjectURL(file) : null;
  }
  function generateImagePreviews(files) {
    return files.map((file) =>
      typeof file === 'string' ? file : URL.createObjectURL(file)
    );
  }
</script>

{#if showModal && productInfo}
  <div
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div
      class="bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl max-h-[540px] overflow-y-auto"
    >
      <h2 class="text-xl font-bold mb-4">Is this your product?</h2>
      <div class="flex gap-2 flex-col md:flex-row">
        {#if showModal && productInfo}
          <div
            class="flex rounded-lg gap-1 w-full overflow-hidden overflow-x-auto md:w-24 md:flex-col md:max-h-[130px] md:overflow-y-auto"
          >
            {#each generateImagePreviews(productInfo.photos) as imageUrl}
              <img
                src={imageUrl}
                alt="Product"
                class="size-24 object-contain rounded-xl"
              />
            {/each}
          </div>
        {/if}

        <div class="flex gap-2 flex-col md:flex-row">
          <img
            src={typeof productInfo.photo === 'string'
              ? productInfo.photo
              : generateImagePreview(productInfo.photo) ||
                'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Z_PIeIRDajXPmZHROt-T_QHaEK%26pid%3DApi&f=1&ipt=0beb80e57b255a0459ebeee9c25b323f3803107df58e3d4d971f65106a8efedf&ipo=images'}
            alt="Product"
            class="w-full h-auto object-contain rounded-lg md:w-1/3"
          />
          <div class="w-2/3">
            <h2 class="text-2xl font-bold mb-2">{productInfo.name}</h2>
            <p><strong>Category:</strong> {productInfo.category_id}</p>
            <p><strong>Manufacturer:</strong> {productInfo.manufacturer_id}</p>
            <p>
              <strong>Regular Price:</strong> ${productInfo.price.regular}
            </p>
            <p>
              <strong>Specialist Price:</strong>
              ${productInfo.price.specialist}
            </p>
            {#if productInfo.price.discount.regular > 0 || productInfo.price.discount.specialist > 0}
              <p>
                <strong>Discounts:</strong>
                Regular: {productInfo.price.discount.regular}%,<br />
                Specialist: {productInfo.price.discount.specialist}%
              </p>
            {/if}
          </div>
        </div>
      </div>
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
        <span class="font-semibold">Bulgarian</span>
        <div class="mt-4 p-4 border rounded bg-gray-100">
          {@html productInfo.description[activeDescription]?.de ||
            'No description available'}
        </div>
        <span class="font-semibold">Germany</span>
        <div class="mt-4 p-4 border rounded bg-gray-100">
          {@html productInfo.description[activeDescription]?.bg ||
            'No description available'}
        </div>
      </div>
      <div class="flex justify-end space-x-2 mt-6">
        <button
          class="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          on:click={toggleModal}
        >
          Cancel
        </button>
        <button
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          on:click={() => {
            onConfirm(productInfo);
            showModal = false;
          }}
        >
          Save
        </button>
      </div>
    </div>
  </div>
{/if}
