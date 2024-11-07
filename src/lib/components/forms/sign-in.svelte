<script>
	import { isLogged } from "$lib/context/store.js";
    import axiosInstance from "$lib/context/api.js";
	import Cookies from "js-cookie";
    export let translation;
    export let switchToForgotPassword;

    let username_or_email = '';
    let password = '';
    let message = '';

    const adminLogin = async () => {
		try {
			const response = await axiosInstance.post("/accounts/login/", { username_or_email, password });
			if (response.data.status) {
				Cookies.set("auth_token", response.data.token, { expires: 7 });
				isLogged.set(true)
			} else {
				message = response.data.detail;
			}
		} catch (error) {
			console.error(error);
		}
	}
</script>

<form class="grid gap-6" on:submit|preventDefault={adminLogin} on:focusin={() => {message = ""}}>
    <input class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none" bind:value={username_or_email}  required type="email" autocomplete="email" placeholder={translation?.sign_in?.inputs[0]?.placeholder} />
    <input class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none" bind:value={password} required placeholder={translation?.sign_in?.inputs[1]?.placeholder} type="password" />

    <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
            <input id="default-checkbox" type="checkbox" class="w-4 h-4"/>
            <label for="default-checkbox" class="text-base font-montserrat">{translation?.sign_in?.inputs[0]?.placeholder}</label>
        </div>

        <button type="button" class="outline-none underline" on:click={switchToForgotPassword()}>{translation?.sign_in?.next[1]}</button>
    </div>

    <p class="mt-2">{message}</p>

    <button type="submit" class="px-8 py-4 bg-[var(--color-violet)] w-full rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105">{translation?.sign_in?.btn}</button>
</form>