<script>
    let tabs = [
        { name: "Описание", content: "Содержание описания" },
        { name: "Способ применения", content: "Содержание способа применения" },
        { name: "Доставка", content: "Содержание доставки" }
    ];

    let activeTab = 0;

    const setActiveTab = (index) => {
        activeTab = index;
    };
</script>

<section class="py-12 container">
    <div class="flex flex-col gap-5">
        <div class="flex max-md:flex-col gap-8">
            {#each tabs as tab, index}
                <button
                    on:click={() => setActiveTab(index)}
                    class="font-bold text-xl uppercase focus:outline-none 
                           {activeTab === index ? 'text-[var(--color-gray)]' : ''}"
                >
                    {tab.name}
                </button>
            {/each}
        </div>

        <div class="py-4">
            <hr>
        </div>

        <p class="font-normal text-base text-[var(--color-gray800)]">
            {tabs[activeTab].content}
        </p>
    </div>
</section>
