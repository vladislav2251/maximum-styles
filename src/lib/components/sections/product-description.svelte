<script>
  export let translation;

  export let description;
  $: tabs = [
    {
      name: translation?.main?.product_description?.description,
      content: description.short.de,
    },
    {
      name: translation?.main?.product_description?.how_to_use,
      content: description.usage.de,
    },
    {
      name: translation?.main?.product_description?.ingredients,
      content: description.ingredients.de,
    },
  ];

  let activeTab = 0;

  const setActiveTab = (index) => {
    activeTab = index;
  };
</script>

<section class="py-12 container">
  <div class="grid gap-5">
    <div class="flex max-md:flex-col max-md:items-start gap-8">
      {#each tabs as tab, index}
        <button
          on:click={() => setActiveTab(index)}
          class="font-bold text-xl uppercase transition-all duration-300 outline-none
                           {activeTab === index
            ? 'text-[var(--color-gray)]'
            : ''}"
        >
          {tab.name}
        </button>
      {/each}
    </div>

    <div class="py-4">
      <hr />
    </div>

    <p class="font-normal text-base text-[var(--color-gray800)]">
      {tabs[activeTab].content}
    </p>
  </div>
</section>
