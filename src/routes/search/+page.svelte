<script lang="ts">
import Shelf from "$lib/components/shared/Shelf.svelte";
import { mockData } from "$lib/data/mock-data";

let page = mockData.searchPage;
let searchQuery = $state("");
</script>

<svelte:head>
    <title>Search - App Store</title>
</svelte:head>

<div class="search-page">
    <div class="search-header">
        <h1>{page.title}</h1>

        <form class="search-form" onsubmit={(e) => e.preventDefault()}>
            <div class="search-input">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                </svg>
                <input
                    type="search"
                    placeholder="Games, Apps, Stories, and More"
                    bind:value={searchQuery}
                />
            </div>
        </form>
    </div>

    {#if !searchQuery}
        {#each page.shelves as shelf}
            <Shelf {shelf}>
                <div class="search-links">
                    {#each shelf.items as item}
                        <a href={item.url} class="search-link">
                            <span class="search-icon">🔍</span>
                            {item.title}
                        </a>
                    {/each}
                </div>
            </Shelf>
        {/each}
    {:else}
        <div class="no-results">
            <p>Search results for "{searchQuery}"</p>
        </div>
    {/if}
</div>

<style>
    .search-page {
        padding: 20px 0;
    }

    .search-header {
        padding: 0 var(--bodyGutter);
        margin-bottom: 32px;
    }

    h1 {
        font: var(--large-title);
        margin-bottom: 20px;
    }

    .search-form {
        max-width: 600px;
    }

    .search-input {
        position: relative;
        display: flex;
        align-items: center;
    }

    .search-input svg {
        position: absolute;
        left: 12px;
        color: var(--systemSecondary);
        pointer-events: none;
    }

    .search-input input {
        width: 100%;
        padding: 12px 12px 12px 44px;
        font: var(--body);
        border: 1px solid var(--systemQuaternary);
        border-radius: var(--border-radius-medium);
        background: var(--systemQuinary);
        color: var(--systemPrimary);
    }

    .search-input input:focus {
        outline: 2px solid var(--keyColor);
        outline-offset: 2px;
        border-color: var(--keyColor);
    }

    .search-links {
        display: flex;
        flex-direction: column;
        gap: 1px;
        background: var(--systemQuaternary);
        border-radius: var(--border-radius-medium);
        overflow: hidden;
    }

    .search-link {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px var(--bodyGutter);
        background: var(--pageBg);
        color: var(--systemPrimary);
        text-decoration: none;
        font: var(--body);
        transition: background-color 0.2s;
    }

    .search-link:hover {
        background: var(--systemQuinary);
    }

    .search-icon {
        font-size: 20px;
        opacity: 0.5;
    }

    .no-results {
        padding: 40px var(--bodyGutter);
        text-align: center;
        color: var(--systemSecondary);
    }
</style>
