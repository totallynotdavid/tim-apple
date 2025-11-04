<script lang="ts">
import Navigation from "$lib/components/layout/Navigation.svelte"
import Footer from "$lib/components/layout/Footer.svelte"

import "../app.scss";
</script>

<div class="app-layout">
    <Navigation />

    <div class="main-wrapper">
        <main>
            <slot />
        </main>

        <Footer />
    </div>
</div>

<style>
    .app-layout {
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto 1fr;
    }

    @media (min-width: 768px) {
        .app-layout {
            grid-template-columns: 260px 1fr;
            grid-template-rows: 1fr;
        }
    }

    .main-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    main {
        flex: 1;
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
    }
</style>
