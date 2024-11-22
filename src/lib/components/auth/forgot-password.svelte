<script>
  export let translation;
</script>

<form class="grid gap-6">
  <input
    class="px-8 py-4 border-solid outline-none text-base w-full border font-normal border-[var(--color-gray)] rounded-md text-[var(--color-gray)] transition-all duration-300 focus:text-[var(--color-primary-300)] focus:border-[var(--color-primary-300)]"
    required
    type="password"
    placeholder={translation?.forgot_password?.inputs[0]?.placeholder}
  />
  <button
    type="submit"
    class="px-8 py-4 bg-[var(--color-violet)] w-full rounded-sm text-md font-base hover:bg-[var(--color-purple)] transition-all duration-300 active:scale-x-105 hover:scale-x-105"
    >{translation?.sign_up?.btn}</button
  >
</form>
