<script lang="ts">
import { mockData } from "$lib/data/mock-data";

const _page = mockData.articlePage;
</script>

<svelte:head>
    <title>{page.card.title} - App Store</title>
</svelte:head>

<div class="article-page">
    <div class="hero-card">
        <TodayCard card={page.card} />
    </div>

    <article class="article-content">
        {#each page.shelves as shelf}
            {#if shelf.contentType === "text"}
                <section class="text-section">
                    {#each shelf.items as item}
                        <p>{item.text}</p>
                    {/each}
                </section>
            {:else if shelf.contentType === "image"}
                <section class="image-section">
                    {#each shelf.items as item}
                        <div class="featured-image">
                            <Artwork artwork={item.artwork} alt="" />
                        </div>
                    {/each}
                </section>
            {/if}
        {/each}

        {#if page.footerApp}
            <a href={page.footerApp.url} class="footer-app">
                <AppIcon icon={page.footerApp.icon} size="large" />
                <div class="footer-app-info">
                    <h3>{page.footerApp.title}</h3>
                    <p>{page.footerApp.subtitle}</p>
                </div>
                <span class="btn btn-blue">View</span>
            </a>
        {/if}
    </article>
</div>

<style>
    .article-page {
        display: grid;
        gap: 32px;
        padding: 32px var(--bodyGutter);
    }

    @media (min-width: 1024px) {
        .article-page {
            grid-template-columns: 1fr 1.5fr;
            align-items: start;
        }

        .hero-card {
            position: sticky;
            top: 32px;
        }
    }

    .hero-card {
        aspect-ratio: 3/4;
        max-height: 700px;
    }

    .article-content {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .text-section p {
        font: var(--body);
        line-height: 1.6;
        color: var(--systemPrimary);
    }

    .featured-image {
        border-radius: var(--border-radius-large);
        overflow: hidden;
    }

    .footer-app {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 24px;
        background: var(--systemQuinary);
        border-radius: var(--border-radius-medium);
        text-decoration: none;
    }

    .footer-app-info {
        flex: 1;
    }

    .footer-app h3 {
        font: var(--title-2);
        color: var(--systemPrimary);
    }

    .footer-app p {
        font: var(--callout);
        color: var(--systemSecondary);
    }
</style>
