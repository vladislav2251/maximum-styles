<script>
  import Person from '$lib/components/forms/person.svelte';
  import Firma from '$lib/components/forms/firma.svelte';

  let status = '1';

  export let translation;

  $: links = [{ href: '/info', label: translation?.main?.profile?.link }];

  export let accountData;

  console.log(accountData);
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    console.log(values);
  };
</script>

<section class="py-12 container mx-auto px-4">
  <div class="flex flex-col lg:flex-row gap-10">
    <div class="flex flex-col gap-3 items-start w-full lg:w-auto">
      <h2 class="text-2xl font-medium">
        {translation?.main?.profile?.my_account}
      </h2>
      <div class="w-full">
        <hr />
      </div>
      {#each links as link}
        <a href={link.href} class="w-full">
          <button
            class="py-3 px-3 w-full text-left flex items-center hover:bg-[var(--color-white100)] rounded-sm transition-all duration-300"
          >
            {link.label}
          </button>
        </a>
      {/each}
    </div>

    <div class="flex-1 grid gap-5">
      <h2 class="text-3xl lg:text-4xl font-bold">
        {translation?.main?.profile?.personal_information}
      </h2>
      <form class="grid gap-5 md:w-1/2" on:submit={onFormSubmit}>
        <div class="flex flex-col md:flex-row gap-5">
          <div class="flex flex-col gap-3 w-full md:w-1/2">
            <label for="firstName"
              >{translation?.main?.profile?.inputs[0]?.label}</label
            >
            <input
              class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
              type="text"
              id="firstName"
              name="firstName"
              bind:value={accountData.first_name}
              minlength="2"
              maxlength="30"
              placeholder={translation?.main?.profile?.inputs[0]?.placeholder}
            />
          </div>
          <div class="flex flex-col gap-3 w-full md:w-1/2">
            <label for="lastName"
              >{translation?.main?.profile?.inputs[1]?.label}</label
            >
            <input
              class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
              type="text"
              id="lastName"
              name="lastName"
              bind:value={accountData.last_name}
              minlength="2"
              maxlength="30"
              placeholder={translation?.main?.profile?.inputs[1]?.placeholder}
            />
          </div>
        </div>
        <div class="flex flex-col gap-3">
          <label for="displayName"
            >{translation?.main?.profile?.inputs[2]?.label}</label
          >
          <input
            class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
            type="text"
            id="username"
            name="username"
            bind:value={accountData.username}
            minlength="2"
            maxlength="30"
            placeholder={translation?.main?.profile?.inputs[2]?.placeholder}
          />
        </div>
        <div class="flex flex-col gap-3">
          <label for="email"
            >{translation?.main?.profile?.inputs[3]?.label}</label
          >
          <input
            class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
            autocomplete="email"
            type="email"
            id="email"
            bind:value={accountData.email}
            name="email"
            placeholder={translation?.main?.profile?.inputs[3]?.placeholder}
          />
        </div>
        <div class="flex flex-col gap-3">
          <label for="phone"
            >{translation?.main?.profile?.inputs[4]?.label}</label
          >
          <input
            class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
            type="tel"
            id="phone"
            name="phone"
            bind:value={accountData.phone}
            placeholder={translation?.main?.profile?.inputs[4]?.placeholder}
          />
        </div>

        <label for="status"
          >{translation?.main?.profile?.inputs[5]?.label}</label
        >

        <div class="flex gap-2">
          <input
            type="radio"
            name="status"
            id="status"
            bind:group={status}
            value="1"
            required
          />
          <span>{translation?.main?.profile?.inputs[5]?.options[0]}</span>
        </div>
        <div class="flex gap-2">
          <input
            type="radio"
            name="status"
            id="status"
            bind:group={status}
            value="2"
            required
          />
          <span>{translation?.main?.profile?.inputs[5]?.options[1]}</span>
        </div>

        {#if status === '1'}
          <Person {translation} />
        {:else if status === '2'}
          <Firma {translation} />
        {/if}

        <button
          class="px-8 py-4 bg-[var(--color-violet)] w-full md:w-1/3 rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105"
          type="submit"
          name="button"
          >{translation?.main?.profile?.change}
        </button>
      </form>
    </div>
  </div>
</section>
