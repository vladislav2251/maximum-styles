<script>
    const menuItems = [
        { label: "Главная", href: "/" },
        { label: "Магазин", href: "/store" },
        { label: "О нас", href: "/about" }
    ];
</script>

<section class="py-12 bg-[var(--color-white100)]">
    <div class="container">
        <div class="grid md:grid-cols-2 max-md:gap-5">
            <h2 class="text-[var(--color-gray800)] font-medium text-4xl">Subscribe to Get Our Letest News</h2>

            <form class="flex items-center md:justify-end">
                <input type="email" required autocomplete="email" name="input" id="email" placeholder="Enter email" class="py-3 px-3 cursor-pointer outline-none">
                <button type="submit" name="button" class="py-3 px-3 justify-center flex items-center bg-[var(--color-black)] text-[var(--color-white)]">Subscribe</button>
            </form>
        </div>
        <div class="py-12">
            <hr class="border border-[var(--color-gray)]">
        </div>
        <div class="grid md:grid-cols-3 max-md:gap-5 items-center md:place-items-center">
            <div class="flex flex-gap gap-5">
                <a href="/">
                    <img src="/svg/logo.svg" alt="logo icon">

                    <p class="text-[var(--color-gray200)] font-normal text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
                </a>
            </div>
            <div class="flex flex-col gap-5">
                <p class="text-[var(--color-gray200)] font-normal text-2xl">Quick Link</p>

                <div class="flex flex-col gap-4">
                    {#each menuItems as element}
                        <a href={element.href}>
                            {element.label}
                        </a>
                    {/each}
                </div>
            </div>
            <div class="flex flex-col gap-5">
                <p class="text-[var(--color-gray200)] font-normal text-2xl">Contact Us</p>

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