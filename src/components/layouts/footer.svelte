<script>
    $:menuItems = [
        { label: translation?.footer?.menuItems?.home, href: "/" },
        { label: translation?.footer?.menuItems?.store, href: "/store" },
        { label: translation?.footer?.menuItems?.about, href: "/about" }
    ];

    export let translation;
</script>

<section class="py-12 bg-[var(--color-white100)]">
    <div class="container">
        <div class="grid md:grid-cols-2 max-md:gap-5">
            <h2 class="text-[var(--color-gray800)] font-medium text-4xl">{translation?.footer?.info?.title}</h2>

            <form class="flex md:justify-end">
                <input type="email" required autocomplete="email" name="input" id="email" placeholder={translation?.footer?.info?.placeholder} class="px-8 py-4 cursor-pointer outline-none">
                <button type="submit" name="button" class="px-8 py-4 justify-center flex items-center bg-[var(--color-black)] text-[var(--color-white)] hover:bg-[var(--color-gray800)] transition-all duration-300 hover:scale-x-105">{translation?.footer?.info?.btn}</button>
            </form>
        </div>
        <div class="py-12">
            <hr class="border border-[var(--color-gray)]">
        </div>
        <div class="grid md:grid-cols-3 max-md:gap-5 items-center md:place-items-center">
            <div class="flex flex-gap gap-5">
                <a href="/">
                    <img src="/svg/logo.svg" alt="logo icon">

                    <p class="text-[var(--color-gray200)] font-normal text-xl">{translation?.footer?.sub_title}</p>
                </a>
            </div>
            <div class="flex flex-col gap-5">
                <p class="text-[var(--color-gray200)] font-normal text-2xl">{translation?.footer?.link_title}</p>

                <div class="flex flex-col gap-4">
                    {#each menuItems as element}
                        <a href={element.href}>
                            {element.label}
                        </a>
                    {/each}
                </div>
            </div>
            <div class="flex flex-col gap-5">
                <p class="text-[var(--color-gray200)] font-normal text-2xl">{translation?.footer?.second_link_title}</p>

                <a href="mailto:maximumstyle@email.com">maximumstyle@email.com</a>
                <a href="tel:+123456789">+123456789</a>
                <div class="flex gap-4">
                    <a href="/">
                        <img src="/svg/facebook.svg" alt="facebook icon">
                    </a>
                    <a href="/">
                        <img src="/svg/twitter.svg" alt="twitter icon">
                    </a>
                    <a href="/">
                        <img src="/svg/insta.svg" alt="insta icon">
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>