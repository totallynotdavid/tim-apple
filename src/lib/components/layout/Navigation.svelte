<script lang="ts">
import { page } from "$app/state";
import { mockData } from "$lib/data/mock-data";
import NavigationItem from "./NavigationItem.svelte";

let menuOpen = false;

$: currentPath = page.url.pathname;
</script>

<nav class="navigation" class:menu-open={menuOpen}>
    <div class="nav-header">
        <button
            class="menu-btn"
            on:click={() => (menuOpen = !menuOpen)}
            aria-label="Toggle menu"
        >
            <span class="menu-icon" class:open={menuOpen}></span>
        </button>

        <a href="/" class="logo">
            <span class="logo-text">App Store</span>
        </a>

        <div></div>
        <!-- Spacer for grid -->
    </div>

    <div class="nav-content" class:open={menuOpen}>
        <ul class="nav-items">
            {#each mockData.navigation.tabs as tab}
                <li>
                    <NavigationItem {tab} active={currentPath === tab.url} />
                </li>
            {/each}
        </ul>
    </div>
</nav>

<style>
    .navigation {
        background: var(--pageBg);
        border-bottom: 1px solid var(--systemQuaternary);
        position: sticky;
        top: 0;
        z-index: 1000;
    }

    .nav-header {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        height: 44px;
        padding: 0 12px;
    }

    .menu-btn {
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu-icon {
        position: relative;
        width: 20px;
        height: 2px;
        background: var(--keyColor);
        border-radius: 2px;
        transition: transform 0.3s;
    }

    .menu-icon::before,
    .menu-icon::after {
        content: "";
        position: absolute;
        width: 20px;
        height: 2px;
        background: var(--keyColor);
        border-radius: 2px;
        transition: transform 0.3s;
    }

    .menu-icon::before {
        top: -6px;
    }

    .menu-icon::after {
        bottom: -6px;
    }

    .menu-icon.open {
        background: transparent;
    }

    .menu-icon.open::before {
        transform: rotate(45deg) translateY(6px);
    }

    .menu-icon.open::after {
        transform: rotate(-45deg) translateY(-6px);
    }

    .logo {
        text-align: center;
        font: var(--title-2);
        color: var(--systemPrimary);
        text-decoration: none;
    }

    .nav-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
    }

    .nav-content.open {
        max-height: 500px;
    }

    .nav-items {
        padding: 16px 20px;
    }

    @media (min-width: 768px) {
        .navigation {
            position: sticky;
            top: 0;
            height: 100vh;
            width: 260px;
            border-bottom: none;
            border-right: 1px solid var(--systemQuaternary);
        }

        .menu-btn {
            display: none;
        }

        .nav-header {
            display: block;
            height: auto;
            padding: 20px;
        }

        .nav-content {
            max-height: none;
            overflow-y: auto;
        }

        .nav-items {
            padding: 0 20px 20px;
        }
    }
</style>
