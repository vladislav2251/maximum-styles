<script>
  import { goto } from '$app/navigation';
  import { createAccount } from '@stores/main.js';
  import Cookies from 'js-cookie';

  export let translation;
  let message = '';
  let showPasswordHint = false;

  const onFormSubmit = async (e) => {
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    const { username, email, password, repeated_password } = values;

    if (password !== repeated_password) {
      message = translation?.sign_up?.pass_not_match;
      return;
    } else {
      message = '';
    }

    const response = await createAccount({
      username,
      email,
      password,
      repeated_password,
    });

    if (response.status_code === 400) {
      message = 'Bad password';
      return;
    }
    Cookies.set('auth_token', response.token);
    goto('/profile/personal');
  };

  const switchToSignIn = () => {
    goto('/sign-in');
  };

  const showHint = () => {
    showPasswordHint = true;
  };

  const hideHint = () => {
    showPasswordHint = false;
  };
</script>

<section class="p-[80px_14px] flex flex-col items-center gap-10 relative">
  <h1 class="text-center font-medium text-[48px]">
    {translation?.sign_up?.title}
  </h1>
  <form
    on:submit|preventDefault={onFormSubmit}
    class="flex flex-col gap-4 items-center w-full max-w-[600px]"
  >
    <input
      class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
      required
      id="username"
      name="username"
      type="text"
      placeholder={translation?.sign_up?.inputs[0]?.placeholder}
    />
    <input
      class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
      required
      id="email"
      name="email"
      placeholder={translation?.sign_up?.inputs[1]?.placeholder}
      type="email"
      autocomplete="email"
    />
    <fieldset class="relative w-full">
      <input
        class="px-8 py-4 mb-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
        required
        id="password"
        name="password"
        type="password"
        placeholder={translation?.sign_up?.inputs[2]?.placeholder}
        on:focus={showHint}
        on:blur={hideHint}
      />
      {#if showPasswordHint}
        <div class="password-hint">
          {translation?.sign_up?.pass_requirements}
        </div>
      {/if}
      <input
        class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
        required
        id="repeated_password"
        name="repeated_password"
        placeholder={translation?.sign_up?.inputs[3]?.placeholder}
        type="password"
      />
    </fieldset>

    <span class="text-red-500 text-lg"
      >{#if message !== ''}{message}{/if}</span
    >

    <button
      type="submit"
      class="px-8 py-4 bg-[var(--color-violet)] w-full rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105"
    >
      {translation?.sign_up?.btn}
    </button>

    <div>
      <span>{translation?.sign_up?.description}</span>
      <button
        type="button"
        class="outline-none underline"
        on:click={switchToSignIn}
      >
        {translation?.sign_up?.next[0]}
      </button>
    </div>
  </form>
</section>

<style>
  .password-hint {
    position: absolute;
    background-color: white;
    border: 2px solid #d7dfeb;
    border-radius: 4px;
    padding: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    max-width: 300px;
    z-index: 10;
    right: 0;
  }
</style>
