<script lang="ts">
    import svelteLogo from "./assets/svelte.svg";
    import typescriptLogo from "./assets/typescript.svg";
    import viteLogo from "./assets/vite.svg";
    import windiLogo from "./assets/windi.svg";
    import Counter from "./components/Counter";
</script>

<main>
    <div class="min-h-screen grid grid-cols-1 grid-rows-10 place-items-center">
        <div class="row-span-6 flex flex-row place-items-center space-x-4">
            <div class="flex flex-col place-items-center">
                <img src="{svelteLogo}" alt="Svelte logo" />
                <h4 class="text-orange-600">Svelte</h4>
            </div>
            <h3>+</h3>
            <div class="flex flex-col place-items-center">
                <img src="{typescriptLogo}" alt="Vite logo" />
                <h4 class="text-blue-500">Typescript</h4>
            </div>
            <h3>+</h3>
            <div class="flex flex-col place-items-center">
                <img src="{viteLogo}" alt="Vite logo" />
                <h4 class="text-purple-600">Vite</h4>
            </div>
            <h3>+</h3>
            <div class="flex flex-col place-items-center">
                <img src="{windiLogo}" alt="Windi logo" />
                <h4 class="text-blue-400">WindiCSS</h4>
            </div>
            <h3>=</h3>
            <h3 class="text-gradient bg-gradient-to-r from-orange-600 via-purple-600 to-blue-400">Awesome!</h3>
        </div>

        <div class="row-span-4">
            <Counter />
        </div>
    </div>
</main>

<style lang="postcss">
    @layer utilities {
        .text-gradient {
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    img {
        @apply w-32 h-32;
    }

    h3 {
        @apply font-extrabold text-7xl;
    }

    h4 {
        @apply font-bold text-4xl;
    }
</style>
