<script>
  export let translation;
  export let onImagesUpload;

  let imageFiles = [];
  let dragOver = false;

  function handleDragOver(event) {
    event.preventDefault();
    dragOver = true;
  }

  function handleDragLeave(event) {
    event.preventDefault();
    dragOver = false;
  }

  function handleDrop(event) {
    event.preventDefault();
    dragOver = false;
    const files = Array.from(event.dataTransfer.files);

    // Filter to only image files and limit to 10 images
    const imageFiles = files
      .filter((file) => file.type.startsWith('image/'))
      .slice(0, 10);

    if (imageFiles.length > 0) {
      updateImageFiles(imageFiles);
    }
  }

  function handleFileSelect(event) {
    const files = Array.from(event.target.files);

    // Filter to only image files and limit to 10 images
    const imageFiles = files
      .filter((file) => file.type.startsWith('image/'))
      .slice(0, 10);

    if (imageFiles.length > 0) {
      updateImageFiles(imageFiles);
    }
  }

  function updateImageFiles(files) {
    // Limit total images to 10
    imageFiles = files.slice(0, 10);
    onImagesUpload(imageFiles);
  }

  function removeImage(index) {
    imageFiles = imageFiles.filter((_, i) => i !== index);
    onImagesUpload(imageFiles);
  }
</script>

<div
  class="w-full p-6 border-2 border-dashed rounded-lg text-center transition-colors duration-300 {dragOver
    ? 'border-[var(--color-primary-300)] bg-blue-50'
    : 'border-[var(--color-gray)] bg-gray-100'}"
  on:dragover={handleDragOver}
  on:dragleave={handleDragLeave}
  on:drop={handleDrop}
>
  <input
    type="file"
    id="multiImage"
    name="multiImage"
    accept="image/*"
    multiple
    class="hidden"
    on:change={handleFileSelect}
  />
  <label
    for="multiImage"
    class="cursor-pointer flex flex-col items-center justify-center space-y-2"
  >
    {#if imageFiles.length > 0}
      <div class="flex flex-wrap justify-center gap-2">
        {#each imageFiles as file, index}
          <div class="relative">
            <img
              src={URL.createObjectURL(file)}
              alt={`Uploaded image ${index + 1}`}
              class="w-20 h-20 object-cover rounded"
            />
            <button
              type="button"
              class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              on:click|preventDefault={() => removeImage(index)}
            >
              ✕
            </button>
          </div>
        {/each}
      </div>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-12 w-12 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <p class="text-gray-600">
        {translation?.createProduct?.imageUpload?.dragDropText ||
          'Drag and drop images or click to select'}
      </p>
      <p class="text-xs text-gray-500">
        {translation?.createProduct?.imageUpload?.formatText ||
          'PNG, JPG, GIF up to 10 images, 10MB each'}
      </p>
    {/if}
  </label>
</div>
