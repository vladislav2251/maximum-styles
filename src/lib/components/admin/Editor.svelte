<script>
    import { onMount } from "svelte";
    import "@modules/wysibb/default/wbbtheme.css"

    let description;

    onMount(async () => {
		if (typeof window !== "undefined") {
			const jQuery = await import("jquery");
			const $ = jQuery.default;

			window.CURLANG = 'ru';
			window.WBBLANG = window.WBBLANG || {};
			window.wbbdebug = false
			await import('wysibb/lang/ru');

			await import('wysibb');
			$(text).css("height", "500px")
			$(text).wysibb({
				buttons: "bold,italic,underline,strike,sup,sub,|,link,|,fontcolor,fontsize,fontfamily,|,justifyleft,justifycenter,justifyright",
				hotkeys: false,
				autoresize: false,
                fonts: {
                    GothamPro: 'Red Hat Display, sans-serif'
                },
                allButtons: {
                    fontfamily: {
                        options: [
                            {title: "Arial",exvalue: "Arial"},
                            {title: "Red Hat Display",exvalue: "Red Hat Display"},
                            {title: "Comic Sans MS",exvalue: "Comic Sans MS"},
                            {title: "Courier New",exvalue: "Courier New"},
                            {title: "Georgia",exvalue: "Georgia"},
                            {title: "Lucida Sans Unicode",exvalue: "Lucida Sans Unicode"},
                            {title: "Tahoma",exvalue: "Tahoma"},
                            {title: "Times New Roman",exvalue: "Times New Roman"},
                            {title: "Trebuchet MS",exvalue: "Trebuchet MS"},
                            {title: "Verdana",exvalue: "Verdana"}
                        ]
                    }
                }
			});
            // if (data) {
            //     $(text).htmlcode(data.description) // это типа вставска текста в редактор (он уже будет отформатирован)
            // }
		}
	});

    const submitHer = async () => {
        const jQuery = await import("jquery");
        const jquery = jQuery.default;

        let text = jquery(description).htmlcode()
        console.log(text)
    }
</script>

<textarea name="text" id="text" bind:this={description} style="resize: none;"></textarea>

<!-- Можно удалить кнопку -->
<button on:click={submitHer}>получить хуйню</button>