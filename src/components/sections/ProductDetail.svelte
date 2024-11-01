<script>
    export let translation;

    import Modal from '/src/components/sections/Modal.svelte';
    import Quantity from '/src/components/sections/Quantity.svelte';

    export let id;
    export let smallImage;
    export let largeImage;
    export let label;
    export let articul;
    export let bestseller;
    export let last;
    export let oldPrice;
    export let newPrice;
    export let currency;
    export let characteristic;

    let isModalOpen = false;

    const toggleModal = () => {
        isModalOpen = !isModalOpen;
    };
</script>

<section class="py-12 container" id={id}>
    <div class="grid lg:grid-cols-2 gap-8">
        <div class="flex gap-5">
            <div class="flex flex-col max-md:hidden gap-5">
                <a data-fancybox="gallery" data-caption="Caption #1" href={smallImage}>
                    <img src={smallImage} alt={label}>
                </a>
            </div>
            <a data-fancybox data-caption="Single image" class="max-md:justify-center h-auto w-full flex overflow-hidden" href={largeImage}>
                <img src={largeImage} alt={label} class="hover:scale-105 transition-all duration-500">
            </a>
        </div>

        <div class="flex flex-col gap-5">
            <h1 class="font-bold text-[var(--color-black)] text-2xl md:text-4xl">{label}</h1>

            <div class="flex max-md:flex-col md:items-center gap-8">
                <p class="text-[var(--color-gray100)] text-md font-medium">Артикул: {articul}</p>
                <p class="text-[var(--color-black)] text-md font-medium">{bestseller}</p>
                <p class="text-[var(--color-black)] text-md font-medium">{last}</p>
            </div>

            <div class="py-4">
                <hr>
            </div>

            <div class="flex gap-3 items-center md:gap-5">
                <p class="line-through text-2xl font-normal text-[var(--color-gray)]">{oldPrice} {currency}</p>
                <h2 class="text-[var(--color-black)] text-4xl font-bold">
                    {newPrice} {currency}
                </h2>

                <Quantity />
            </div>

            <div class="py-8">
                <button
                    type="button"
                    class="bg-[var(--color-violet)] py-4 px-6 active:scale-x-105 hover:scale-x-105 md:py-5 md:px-10 uppercase shadow-sm flex justify-center items-center text-[var(--color-white)] font-bold text-md md:text-2xl hover:bg-[var(--color-purple)] transition-all duration-300"
                    on:click={toggleModal}
                >
                    {translation?.main?.product_detail?.add_to_cart}
                </button>
            </div>
            <div class="flex flex-col gap-5">
                <h2 class="text-[var(--color-black)] text-2xl font-bold">{translation?.main?.product_detail?.info}:</h2>
                <p class="text-[var(--color-gray100)] text-md md:text-xl font-medium">-{characteristic}</p>
            </div>
        </div>
    </div>

    <Modal isOpen={isModalOpen} onClose={toggleModal} />
</section>