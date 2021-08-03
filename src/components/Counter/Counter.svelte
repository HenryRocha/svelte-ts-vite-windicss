<script lang="ts">
    import Button from "../Button";

    let count: number = 0;

    function increment() {
        count += 1;
    }
</script>

<Button on:click="{increment}" kind="tertiary" sizex="xl" sizey="xl">
    Clicks: {count}
</Button>

<style>
</style>
