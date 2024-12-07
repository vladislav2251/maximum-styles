<script>
  import { goto } from '$app/navigation';
  import { logIn } from '@stores/main.js';
  import Cookies from 'js-cookie';
  export let translation;
  let message = '';

  const onFormSubmit = async (e) => {
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    const { email, password } = values;
    const response = await logIn(email, password);
    if (response.status_code === 401) {
      message = response.detail;
      return;
    }
    Cookies.set('auth_token', response.token);
    goto('/profile');
  };

  // const switchToForgotPassword = () => {
  //   goto('/forgot-password');
  // };
  const switchToSignUp = () => {
    goto('/sign-up');
  };
</script>

<section class=" p-[80px_14px] flex flex-col items-center gap-10">
  <h1 class="text-center font-medium text-[48px]">
    {translation.sign_in.title}
  </h1>
  <form
    on:submit|preventDefault={onFormSubmit}
    class="flex flex-col gap-4 items-center w-full max-w-[600px]"
  >
    <input
      class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
      required
      id="email"
      name="email"
      type="email"
      autocomplete="email"
      placeholder={translation?.sign_in?.inputs[0]?.placeholder}
    />
    <input
      class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
      required
      id="password"
      name="password"
      placeholder={translation?.sign_in?.inputs[1]?.placeholder}
      type="password"
    />

    <span class="text-red-500 text-lg"
      >{#if message !== ''}{message}{/if}</span
    >

    <button
      type="submit"
      class="px-8 py-4 bg-[var(--color-violet)] w-full rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105"
      >{translation?.sign_in?.btn}</button
    >

    <div class="flex justify-between w-full">
      <button
        type="button"
        class="outline-none underline"
        on:click={switchToSignUp()}>{translation?.sign_in?.next[0]}</button
      >
      <!-- <button -->
      <!--   type="button" -->
      <!--   class="outline-none underline" -->
      <!--   on:click={switchToForgotPassword()} -->
      <!--   >{translation?.sign_in?.next[1]}</button -->
      <!-- > -->
    </div>
  </form>
</section>
