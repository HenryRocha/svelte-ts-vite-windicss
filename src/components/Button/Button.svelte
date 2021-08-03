<script lang="ts">
    /**
     * Specify the kind of button
     * @type {"primary" | "secondary" | "tertiary"}
     */
    export let kind: string = "primary";

    /**
     * Specify the size of button
     * @type {"sm" | "md" | "lg" | "xl" | "xxl" | "expand"}
     */
    export let sizex: string = "md";

    /**
     * Specify the size of button
     * @type {"sm" | "md" | "lg" | "xl" | "expand"}
     */
    export let sizey: string = "md";

    // Apply classes and props.
    $: buttonProps = {
        class: [kind && `btn-${kind}`, sizex && `btn-sizex-${sizex}`, sizey && `btn-sizey-${sizey}`]
            .filter(Boolean)
            .join(" ")
    };
</script>

<button {...buttonProps} on:click on:mouseover on:mouseenter on:mouseleave on:focus>
    <slot />
</button>

<style lang="postcss">
    button {
        @apply text-lg font-bold;
        @apply outline-none focus:outline-none;
    }

    .btn-primary {
        @apply bg-blue-500 hover:bg-blue-600 active:bg-blue-700;
        @apply text-white;
    }

    .btn-secondary {
        @apply bg-gray-500 hover:bg-gray-600 active:bg-gray-700;
        @apply text-white;
    }

    .btn-tertiary {
        @apply bg-white border-4 border-yellow-500 hover:bg-yellow-500 active:bg-yellow-600 active:border-yellow-600;
        @apply text-yellow-500 hover:text-white;
    }

    .btn-sizex-sm {
        @apply w-16;
    }

    .btn-sizex-md {
        @apply w-20;
    }

    .btn-sizex-lg {
        @apply w-24;
    }

    .btn-sizex-xl {
        @apply w-32;
    }

    .btn-sizex-xxl {
        @apply w-48;
    }

    .btn-sizex-expand {
        @apply w-full;
    }

    .btn-sizey-sm {
        @apply h-10;
    }

    .btn-sizey-md {
        @apply h-12;
    }

    .btn-sizey-lg {
        @apply h-14;
    }

    .btn-sizey-xl {
        @apply h-16;
    }

    .btn-sizey-expand {
        @apply h-full;
    }
</style>
