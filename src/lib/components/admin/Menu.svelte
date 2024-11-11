<script>
    export let translation;
</script>

<section class="container py-12">
    <h2 class="text-2xl font-bold">{translation.menu.title}</h2>
    <ul class="grid gap-4">
        <li class="flex gap-2">
            <a href="/admin/products" class="text-blue-500 hover:underline">
                {translation.menu.products}
            </a>
        </li>
        <li class="flex gap-2">
            <a href="/admin/categories" class="text-blue-500 hover:underline">
                {translation.menu.categories}
            </a>
        </li>
        <li class="flex gap-2">
            <a href="/admin/orders" class="text-blue-500 hover:underline">
                {translation.menu.orders}
            </a>
        </li>
        <li class="flex gap-2">
            <a href="/admin/users" class="text-blue-500 hover:underline">
                {translation.menu.users}
            </a>
        </li>
</section>