<script>
    export let translation;
    export let switchToForgotPassword;
</script>

<form class="grid gap-6">
    <input class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none" type="email" autocomplete="email" placeholder={translation?.sign_in?.inputs[0]?.placeholder} />
    <input class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none" placeholder={translation?.sign_in?.inputs[1]?.placeholder} type="password" />

    <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
            <input id="default-checkbox" type="checkbox" class="w-4 h-4"/>
            <label for="default-checkbox" class="text-base font-montserrat">{translation?.sign_in?.inputs[0]?.placeholder}</label>
        </div>

        <button type="button" class="outline-none underline" on:click={switchToForgotPassword()}>{translation?.sign_in?.next[1]}</button>
    </div>

    <button type="submit" class="px-8 py-4 bg-[var(--color-violet)] w-full rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105">{translation?.sign_in?.btn}</button>
</form>