<script lang="ts">
    /**
     * Specify the kind of button
     * @type {"primary" | "primary-outline" | "secondary" | "secondary-outline" | "accent" | "accent-outline" |
     * "neutral" | "neutral-outline" | "info" | "success" | "warning" | "error" }
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

    /**
     * Specify the roundness of the button. Empty for no roundness.
     * @type {"sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"}
     */
    export let rounded: string = "";

    // Apply classes and props.
    $: buttonProps = {
        class: [
            kind && `btn-${kind}`,
            sizex && `btn-sizex-${sizex}`,
            sizey && `btn-sizey-${sizey}`,
            rounded && `btn-rounded-${rounded}`
        ]
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
        @apply transform-gpu duration-75 active:scale-95;
    }

    .btn-primary {
        @apply bg-primary hover:bg-primary-focus active:bg-primary-focus;
        @apply text-primary-content;
    }

    .btn-secondary {
        @apply bg-secondary hover:bg-secondary-focus active:bg-secondary-focus;
        @apply text-secondary-content;
    }

    .btn-accent {
        @apply bg-accent hover:bg-accent-focus active:bg-accent-focus;
        @apply text-accent-content;
    }

    .btn-neutral {
        @apply bg-neutral hover:bg-neutral-focus active:bg-neutral-focus;
        @apply text-neutral-content;
    }

    .btn-primary-outline {
        @apply bg-transparent border-4 border-primary hover:bg-primary active:bg-primary-focus active:border-primary-focus;
        @apply text-primary hover:text-primary-content;
    }

    .btn-secondary-outline {
        @apply bg-transparent border-4 border-secondary hover:bg-secondary active:bg-secondary-focus active:border-secondary-focus;
        @apply text-secondary hover:text-secondary-content;
    }

    .btn-accent-outline {
        @apply bg-transparent border-4 border-accent hover:bg-accent active:bg-accent-focus active:border-accent-focus;
        @apply text-accent hover:text-accent-content;
    }

    .btn-neutral-outline {
        @apply bg-transparent border-4 border-neutral hover:bg-neutral active:bg-neutral-focus active:border-neutral-focus;
        @apply text-neutral hover:text-neutral-content;
    }

    .btn-info {
        @apply bg-info;
        @apply text-gray-700;
    }

    .btn-success {
        @apply bg-success;
        @apply text-gray-700;
    }

    .btn-warning {
        @apply bg-warning;
        @apply text-gray-700;
    }

    .btn-error {
        @apply bg-error;
        @apply text-gray-700;
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

    .btn-rounded-sm {
        @apply rounded-sm;
    }

    .btn-rounded-md {
        @apply rounded-md;
    }

    .btn-rounded-lg {
        @apply rounded-lg;
    }

    .btn-rounded-xl {
        @apply rounded-xl;
    }

    .btn-rounded-2xl {
        @apply rounded-2xl;
    }

    .btn-rounded-3xl {
        @apply rounded-3xl;
    }

    .btn-rounded-full {
        @apply rounded-full;
    }
</style>
