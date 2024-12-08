<script>
  import { updateAccount } from '@stores/main';
  export let translation;
  export let accountData;
  const deliveryData = accountData.delivery_data;

  const onFormSubmit = async (e) => {
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());
    const { country, city, postcode, address } = values;
    const newDeliveryValues = {
      delivery_data: {
        country,
        city,
        postcode,
        address,
      },
    };
    await updateAccount(accountData._id, newDeliveryValues);
  };
</script>

<form
  class="flex flex-col gap-5 md:min-w-[589px]"
  on:submit|preventDefault={onFormSubmit}
>
  <h2 class="text-3xl font-bold">
    {translation?.main?.profile?.delivery_info}
  </h2>

  <label for="country"
    >{translation?.main?.profile?.country}
    <input
      type="text"
      name="country"
      id="country"
      bind:value={deliveryData.country}
      placeholder={translation?.main?.profile?.country}
      class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 outline-none"
    />
  </label>

  <label for="city"
    >{translation?.main?.profile?.city}
    <input
      type="text"
      name="city"
      id="city"
      bind:value={deliveryData.city}
      placeholder={translation?.main?.profile?.city}
      class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 outline-none"
    />
  </label>

  <label for="postcode"
    >{translation?.main?.profile?.post}
    <input
      type="text"
      name="postcode"
      id="postcode"
      bind:value={deliveryData.postcode}
      placeholder={translation?.main?.profile?.post}
      class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 outline-none"
    />
  </label>

  <label for="address"
    >{translation?.main?.profile?.address}
    <input
      type="text"
      name="address"
      id="address"
      bind:value={deliveryData.address}
      placeholder={translation?.main?.profile?.address}
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
