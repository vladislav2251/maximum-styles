<script>
  import { updateAccount } from '@stores/main';
  import DragDrop from './drag-drop.svelte';
  export let translation;
  export let accountData;

  const onFormSubmit = async (e) => {
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());
    console.log(values);
  };
</script>

<form
  class="flex flex-col gap-5 md:min-w-[589px]"
  on:submit|preventDefault={onFormSubmit}
>
  <h2 class="text-2xl font-bold">
    {translation?.main?.profile?.specialist_information}
  </h2>

  <DragDrop />

  <button
    class="px-8 py-4 bg-[var(--color-violet)] w-full md:w-1/3 rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105"
    type="submit"
    name="button"
    >{translation?.main?.profile?.change}
  </button>
</form>
