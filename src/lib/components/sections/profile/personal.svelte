<script>
  import { updateAccount } from '@stores/main';

  export let translation;

  export let accountData;

  const onFormSubmit = async (e) => {
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());
    const { first_name, last_name, username, email, phone } = values;
    const newAccountValues = {
      username,
      email,
      personal_data: {
        first_name,
        last_name,
        phone,
      },
    };
    await updateAccount(accountData._id, newAccountValues);
  };
</script>

<form class="flex flex-col gap-5" on:submit|preventDefault={onFormSubmit}>
  <h2 class="text-3xl font-bold">
    {translation?.main?.profile?.link}
  </h2>

  <fieldset class="flex flex-col lg:flex-row gap-3 w-full">
    <label for="first_name"
      >{translation?.main?.profile?.inputs[0]?.label}
      <input
        class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 outline-none"
        type="text"
        id="first_name"
        name="first_name"
        bind:value={accountData.personal_data.first_name}
        minlength="2"
        maxlength="30"
        placeholder={translation?.main?.profile?.inputs[0]?.placeholder}
      />
    </label>

    <label for="last_name"
      >{translation?.main?.profile?.inputs[1]?.label}
      <input
        class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 outline-none"
        type="text"
        id="last_name"
        name="last_name"
        bind:value={accountData.personal_data.last_name}
        minlength="2"
        maxlength="30"
        placeholder={translation?.main?.profile?.inputs[1]?.placeholder}
      />
    </label>
  </fieldset>

  <label for="displayName"
    >{translation?.main?.profile?.inputs[2]?.label}
    <input
      class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 outline-none"
      type="text"
      id="username"
      name="username"
      bind:value={accountData.username}
      minlength="2"
      maxlength="30"
      placeholder={translation?.main?.profile?.inputs[2]?.placeholder}
    />
  </label>

  <label for="email"
    >{translation?.main?.profile?.inputs[3]?.label}
    <input
      class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 outline-none"
      autocomplete="email"
      type="email"
      id="email"
      bind:value={accountData.email}
      name="email"
      placeholder={translation?.main?.profile?.inputs[3]?.placeholder}
    />
  </label>

  <label for="phone"
    >{translation?.main?.profile?.inputs[4]?.label}
    <input
      class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md transition-all duration-300 outline-none"
      type="tel"
      id="phone"
      name="phone"
      bind:value={accountData.personal_data.phone}
      placeholder={translation?.main?.profile?.inputs[4]?.placeholder}
    />
  </label>

  <button
    class="px-8 py-4 bg-[var(--color-violet)] w-full md:w-1/3 rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105"
    type="submit"
    name="button"
    >{translation?.main?.profile?.change}
  </button>
</form>
