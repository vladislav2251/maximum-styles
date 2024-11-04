<script>
    export let translation;
</script>

<form class="grid gap-6">
    <input class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none" required type="text" autocomplete="given-name" placeholder={translation?.sign_up?.inputs[0]?.placeholder} />
    <input class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none" required type="text" autocomplete="family-name" placeholder={translation?.sign_up?.inputs[1]?.placeholder} />
    <input class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none" required type="email" autocomplete="email" placeholder={translation?.sign_up?.inputs[2]?.placeholder} />
    <input class="px-8 py-4 border-solid text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)] outline-none" required type="password" placeholder={translation?.sign_up?.inputs[3]?.placeholder} />

    <div class="flex items-center gap-2">
        <input id="default-checkbox" type="checkbox" class="w-4 h-4"/>
        <label for="default-checkbox" class="text-base font-montserrat">{translation?.sign_up?.next[0]} <a href="/" class="font-semibold cursor-pointer hover:underline">{translation?.sign_up?.next[2]}</a> {translation?.sign_up?.next[1]} <a href="/" class="font-semibold cursor-pointer hover:underline">{translation?.sign_up?.next[3]}</a></label>
    </div>

    <button type="submit" class="px-8 py-4 bg-[var(--color-violet)] w-full rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105">{translation?.sign_up?.btn}</button>
</form>