<script>
  export let translation;
</script>

<fieldset class="grid gap-2">
  <h2 class="text-3xl lg:text-2xl font-bold">
    {translation?.main?.profile?.delivery_info}
  </h2>

  <div class="grid grid-cols-3 w-full gap-3">
    <div class="flex flex-col gap-2">
      <label for="country">{translation?.main?.profile?.[7]?.label}</label>
      <input
        type="text"
        name="country"
        id="country"
        placeholder={translation?.main?.profile?.inputs[7]?.placeholder}
        class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="city">{translation?.main?.profile?.inputs[8]?.label}</label>
      <input
        type="text"
        name="city"
        id="city"
        placeholder={translation?.main?.profile?.inputs[8]?.placeholder}
        class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="post_code"
        >{translation?.main?.profile?.inputs[9]?.label}</label
      >
      <input
        type="text"
        name="post_code"
        id="post_code"
        placeholder={translation?.main?.profile?.inputs[9]?.placeholder}
        class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
      />
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <label for="address">{translation?.main?.profile?.inputs[9]?.label}</label>
    <input
      type="text"
      name="address"
      id="address"
      placeholder={translation?.main?.profile?.inputs[9]?.placeholder}
      class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
    />
  </div>
</fieldset>
