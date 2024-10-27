<Header />
<main>
    <slot />
</main>
<Footer />

<script>
    import Header from "@/components/layouts/header.svelte";
    import "$lib/styles/styles.css"
    import Footer from "/src/components/layouts/footer.svelte";
</script>