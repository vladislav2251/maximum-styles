<section class="pb-8 container flex justify-center items-center flex-col gap-5">
    <div class="flex justify-center items-center w-20 h-20 rounded-full bg-[var(--color-purple)] animate-pulse">
        <div class="flex justify-center items-center rounded-full w-14 h-14 bg-[var(--color-violet)] animate-">
            <img src="/svg/mobile.svg" alt="mobile icon">
        </div>
    </div>

    <h2 class="font-normal text-xl uppercase text-center">{translation?.main?.contact?.question}</h2>
    <div class="flex">
        <a href="tel:+499103439696" class="text-xs font-base">+49(910) 343-96-96</a>
        <p class="text-xs font-base text-[var(--color-gray200)]">(09:00-18 :00)</p>
    </div>
</section>
<script>
    export let translation;
</script>