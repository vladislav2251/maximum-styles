<script>
  export let translation;
</script>

<div class="grid gap-2">
  <h2 class="text-3xl lg:text-4xl font-bold">
    {translation?.main?.profile?.personal_information}
  </h2>

  <div class="grid grid-cols-3 w-full gap-3">
    <div class="flex flex-col gap-2">
      <label for="first_name"
        >{translation?.main?.profile?.[7]?.label}</label
      >
      <input
        type="text"
        name="first_name"
        id="first_name"
        placeholder={translation?.main?.profile?.inputs[7]?.placeholder}
        required
        class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="last_name"
        >{translation?.main?.profile?.inputs[8]?.label}</label
      >
      <input
        type="text"
        name="last_name"
        id="last_name"
        placeholder={translation?.main?.profile?.inputs[8]?.placeholder}
        required
        class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="last_name"
        >{translation?.main?.profile?.inputs[9]?.label}</label
      >
      <input
        type="text"
        name="last_name"
        id="last_name"
        placeholder={translation?.main?.profile?.inputs[9]?.placeholder}
        required
        class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
      />
    </div>
  </div>

  <div class="flex flex-col gap-2">
    <label for="last_name">{translation?.main?.profile?.inputs[9]?.label}</label
    >
    <input
      type="text"
      name="last_name"
      id="last_name"
      placeholder={translation?.main?.profile?.inputs[9]?.placeholder}
      required
      class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
    />
  </div>
</div>
