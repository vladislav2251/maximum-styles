<script>
    import Categories from "/src/components/sections/Categories.svelte";
    import Search from "/src/components/sections/Search.svelte";
    import Products from "/src/components/sections/Products.svelte";
</script>

<div class="flex gap-2 max-md:flex-col container py-12">
    <Categories />

    <div class="flex-1">
        <Search />
        <Products />
    </div>
</div>