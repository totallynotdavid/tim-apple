<script lang="ts">
import { mockData } from "$lib/data/mock-data";

const _page = mockData.productPage;
</script>

<svelte:head>
    <title>{page.title} - App Store</title>
</svelte:head>

<div class="product-page">
    <header class="product-header">
        <div class="header-content">
            <AppIcon icon={page.icon} size="large" />

            <div class="header-info">
                <h1>{page.title}</h1>
                <p class="subtitle">{page.subtitle}</p>
            </div>
        </div>

        <div class="header-actions">
            <span class="btn btn-blue">{page.price}</span>
            <button class="share-btn" aria-label="Share">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M10 3v10m0-10l-4 4m4-4l4 4M4 13v4h12v-4" />
                </svg>
            </button>
        </div>
    </header>

    {#each page.shelves as shelf}
        {#if shelf.contentType === "badge"}
            <section class="badges">
                {#each shelf.items as item}
                    <ProductBadge {item} />
                {/each}
            </section>
        {:else if shelf.contentType === "media"}
            <Shelf {shelf} horizontal>
                {#each shelf.items as item}
                    <ProductMedia {item} />
                {/each}
            </Shelf>
        {:else if shelf.contentType === "description"}
            <section class="description">
                {#each shelf.items as item}
                    <p>{item.text}</p>
                {/each}
            </section>
        {:else if shelf.contentType === "rating"}
            <Shelf {shelf}>
                {#each shelf.items as item}
                    <div class="rating-summary">
                        <div class="rating-score">
                            <div class="rating-number">{item.average}</div>
                            <p>out of 5</p>
                        </div>

                        <div class="rating-details">
                            <div class="rating-bars">
                                {#each item.distribution as count, i}
                                    <div class="rating-bar">
                                        <StarRating rating={5 - i} />
                                        <div class="bar">
                                            <div
                                                class="bar-fill"
                                                style:width="{(count /
                                                    item.count) *
                                                    100}%"
                                            ></div>
                                        </div>
                                    </div>
                                {/each}
                            </div>
                            <p class="rating-count">
                                {item.count.toLocaleString()} Ratings
                            </p>
                        </div>
                    </div>
                {/each}
            </Shelf>
        {/if}
    {/each}
</div>

<style>
    .product-page {
        padding: 20px 0;
    }

    .product-header {
        padding: 20px var(--bodyGutter);
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.05),
            transparent
        );
        border-bottom: 1px solid var(--systemQuaternary);
        margin-bottom: 32px;
    }

    .header-content {
        display: flex;
        gap: 16px;
        align-items: center;
        margin-bottom: 16px;
    }

    .header-info {
        flex: 1;
        min-width: 0;
    }

    h1 {
        font: var(--large-title);
        color: var(--systemPrimary);
    }

    .subtitle {
        font: var(--title-2);
        color: var(--systemSecondary);
    }

    .header-actions {
        display: flex;
        gap: 12px;
        align-items: center;
    }

    .share-btn {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: var(--systemQuinary);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--keyColor);
    }

    .badges {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        padding: 0 var(--bodyGutter);
        margin-bottom: 32px;
    }

    .description {
        padding: 0 var(--bodyGutter);
        margin-bottom: 32px;
    }

    .description p {
        font: var(--body);
        line-height: 1.6;
        color: var(--systemPrimary);
    }

    .rating-summary {
        display: flex;
        gap: 32px;
        padding: 0 var(--bodyGutter);
    }

    .rating-score {
        text-align: center;
        min-width: 100px;
    }

    .rating-number {
        font-size: 56px;
        font-weight: 700;
        color: var(--systemPrimary);
    }

    .rating-score p {
        font: var(--callout);
        color: var(--systemSecondary);
    }

    .rating-details {
        flex: 1;
    }

    .rating-bars {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;
    }

    .rating-bar {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .bar {
        flex: 1;
        height: 4px;
        background: var(--systemQuaternary);
        border-radius: 2px;
        overflow: hidden;
    }

    .bar-fill {
        height: 100%;
        background: var(--systemSecondary);
    }

    .rating-count {
        font: var(--callout);
        color: var(--systemSecondary);
        text-align: right;
    }

    @media (max-width: 767px) {
        .rating-summary {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
