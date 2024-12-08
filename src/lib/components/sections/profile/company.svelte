<script>
  import { updateAccount } from '@stores/main';
  import DragDrop from './drag-drop.svelte';
  export let translation;
  export let accountData;

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());
    const { country, city, postcode, address } = values;
    const newAccountValues = {
      company_data: {
        country,
        city,
        postcode,
        address,
      },
    };
    await updateAccount(accountData._id, newAccountValues);
  };
</script>

<form
  class="flex flex-col gap-5 md:min-w-[589px]"
  on:submit|preventDefault={onFormSubmit}
>
  <h2 class="text-2xl font-bold">
    {translation?.main?.profile?.company_information}
  </h2>

  <DragDrop />

  <label for="first_name"
    >{translation?.main?.profile?.country}
    <input
      type="text"
      name="first_name"
      id="first_name"
      placeholder={translation?.main?.profile?.country}
      required
      class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 outline-none"
    />
  </label>

  <label for="last_name"
    >{translation?.main?.profile?.city}
    <input
      type="text"
      name="last_name"
      id="last_name"
      placeholder={translation?.main?.profile?.city}
      required
      class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 outline-none"
    />
  </label>

  <label for="last_name"
    >{translation?.main?.profile?.post}
    <input
      type="text"
      name="last_name"
      id="last_name"
      placeholder={translation?.main?.profile?.post}
      required
      class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 outline-none"
    />
  </label>

  <button
    class="px-8 py-4 bg-[var(--color-violet)] w-full md:w-1/3 rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105"
    type="submit"
    name="button"
    >{translation?.main?.profile?.change}
  </button>
</form>
