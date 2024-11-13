<script>
  import axiosInstance from '$lib/context/api.js';
  import Cookies from 'js-cookie';

  export let translation;

  let username = '';
  let email = '';
  let password = '';
  let repeated_password = '';
  let message = '';

  const registerUser = async () => {
    try {
      const response = await axiosInstance.post('/accounts/create/', {
        username,
        email,
        password,
        repeated_password,
      });

      if (response.status === 200) {
        Cookies.set('auth_token', response.data.account.token, { expires: 7 });
        localStorage.setItem(
          'user',
          JSON.stringify({
            username: response.data.account.username,
            email: response.data.account.email,
            logged: true,
          })
        );

        message =
          translation?.sign_up?.success_message ||
          'Account created successfully!';
        window.location.href = 'http://localhost:5173/profile';
      } else {
        message = response.data.detail;
      }
    } catch (error) {
      console.error(error);
      message = 'An error occurred. Please try again.';
    }
  };
</script>

<form
  class="grid gap-6"
  on:submit|preventDefault={registerUser}
  on:focusin={() => {
    message = '';
  }}
>
  <input
    class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
    bind:value={username}
    required
    type="text"
    autocomplete="given-name"
    placeholder={translation?.sign_up?.inputs[0]?.placeholder}
  />
  <input
    class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
    bind:value={email}
    required
    type="email"
    autocomplete="email"
    placeholder={translation?.sign_up?.inputs[1]?.placeholder}
  />
  <input
    class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
    bind:value={password}
    required
    type="text"
    placeholder={translation?.sign_up?.inputs[2]?.placeholder}
  />
  <input
    class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none"
    bind:value={repeated_password}
    required
    type="pteassword"
    placeholder={translation?.sign_up?.inputs[3]?.placeholder}
  />

  <div class="flex items-center gap-2">
    <input id="default-checkbox" type="checkbox" class="w-4 h-4" />
    <label for="default-checkbox" class="text-base font-montserrat"
      >{translation?.sign_up?.next[0]}
      <a href="/" class="font-semibold cursor-pointer hover:underline"
        >{translation?.sign_up?.next[2]}</a
      >
      {translation?.sign_up?.next[1]}
      <a href="/" class="font-semibold cursor-pointer hover:underline"
        >{translation?.sign_up?.next[3]}</a
      ></label
    >
  </div>

  <p class="mt-2">{message}</p>

  <button
    type="submit"
    class="px-8 py-4 bg-[var(--color-violet)] w-full rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105"
    >{translation?.sign_up?.btn}</button
  >
</form>
