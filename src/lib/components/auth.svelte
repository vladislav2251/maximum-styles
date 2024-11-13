<script>
  import ForgotPasswordForm from '$lib/components/forms/forgot-password.svelte';
  import SignUpForm from '$lib/components/forms/sign-up.svelte';
  import SignInForm from '$lib/components/forms/sign-in.svelte';

  import { fly } from 'svelte/transition';
  export let translation;
  export let isModalOpen;
  export let closeModal;

  let currentForm = 'signIn';

  const switchToForgotPassword = () => {
    currentForm = 'forgotPassword';
  };

  const toggleCloseModal = () => {
    closeModal();
    currentForm = 'signIn';
  };
</script>

{#if isModalOpen}
  <div
    class="bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 rounded-[22px] w-[91.666667%] max-w-[652px] z-50 flex flex-col gap-8 shadow-lg"
    in:fly={{ y: 200, duration: 400 }}
    out:fly={{ y: -200, duration: 300 }}
  >
    {#if currentForm === 'signIn'}
      <div>
        <div class="flex items-center justify-between">
          <h5 class="font-medium text-[40px]">{translation?.sign_in?.title}</h5>

          <button
            type="button"
            on:click={() => toggleCloseModal()}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <span class="text-sm font-montserrat">
          {translation?.sign_in?.description}
          <button
            type="button"
            on:click={() => (currentForm = 'signUp')}
            class="font-semibold cursor-pointer hover:underline"
          >
            {translation?.sign_in?.next[0]}
          </button>
        </span>
      </div>

      <SignInForm {translation} {switchToForgotPassword} />
    {:else if currentForm === 'signUp'}
      <div>
        <div class="flex items-center justify-between">
          <h5 class="font-medium text-[40px]">{translation?.sign_up?.title}</h5>
          <button
            type="button"
            on:click={() => toggleCloseModal()}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <span class="text-sm">
          {translation?.sign_up?.description}
          <button
            type="button"
            on:click={() => (currentForm = 'signIn')}
            class="font-semibold cursor-pointer hover:underline"
          >
            {translation?.sign_up?.next[0]}
          </button>
        </span>
      </div>

      <SignUpForm {translation} />
    {:else if currentForm === 'forgotPassword'}
      <div>
        <div class="flex items-center justify-between">
          <h5 class="font-medium text-[40px]">
            {translation?.forgot_password?.title}
          </h5>
          <button
            type="button"
            on:click={() => toggleCloseModal()}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <span class="text-sm">
          {translation?.forgot_password?.description}
          <button
            type="button"
            on:click={() => (currentForm = 'signIn')}
            class="font-semibold cursor-pointer hover:underline"
          >
            {translation?.forgot_password?.next[0]}
          </button>
        </span>
      </div>

      <ForgotPasswordForm {translation} />
    {/if}
  </div>
{/if}

<button
  class="fixed flex inset-0 bg-black/50 cursor-default backdrop-blur-sm transition-opacity duration-300 z-40"
  on:click={() => toggleCloseModal()}
  aria-label="Close menu"
  tabindex="0"
  style="outline: none;"
  class:opacity-100={isModalOpen}
  class:opacity-0={!isModalOpen}
  class:pointer-events-auto={isModalOpen}
  class:pointer-events-none={!isModalOpen}
>
</button>
