<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  let dragOver = false;
  let file;

  function handleDrop(event) {
    event.preventDefault();
    dragOver = false;

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      file = event.dataTransfer.files[0];
      dispatch('fileSelected', { file });
    }
  }

  function handleInputChange(event) {
    file = event.target.files[0];
    dispatch('fileSelected', { file });
  }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
  class={`relative flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-4 transition ${
    dragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
  }`}
  on:dragover|preventDefault={() => (dragOver = true)}
  on:dragleave={() => (dragOver = false)}
  on:drop={handleDrop}
>
  <input
    type="file"
    id="image"
    name="image"
    accept="image/*"
    class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
    on:change={handleInputChange}
  />
  {#if file}
    <img
      src={URL.createObjectURL(file)}
      alt="Sertificate"
      class="max-w-full max-h-48 rounded-md shadow-sm"
    />
  {:else}
    <div class="text-gray-500 text-center">
      <p class="mb-2">Drag and drop an image here</p>
      <p class="text-sm">or click to upload</p>
    </div>
  {/if}
</div>
