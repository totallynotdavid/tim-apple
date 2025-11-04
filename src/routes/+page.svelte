<script lang="ts">
import TodayCard from "$lib/components/items/TodayCard.svelte";
import Shelf from "$lib/components/shared/Shelf.svelte";
import { mockData } from "$lib/data/mock-data";

const page = mockData.todayPage;
</script>

<svelte:head>
    <title>Today - App Store</title>
</svelte:head>

<div class="today-page">
    <h1>{page.title}</h1>

    {#each page.shelves as shelf}
        <Shelf {shelf}>
            <div class="today-cards">
                {#each shelf.items as card}
                    <div
                        class="card-wrapper"
                        class:stretch={shelf.items.length === 1}
                    >
                        <TodayCard {card} />
                    </div>
                {/each}
            </div>
        </Shelf>
    {/each}
</div>

<style>
    .today-page {
        padding: 20px 0;
    }

    h1 {
        font: var(--large-title);
        padding: 0 var(--bodyGutter);
        margin-bottom: 20px;
    }

    .today-cards {
        display: grid;
        gap: 16px;
        padding: 0 var(--bodyGutter);
    }

    .card-wrapper {
        max-height: 600px;
    }

    .card-wrapper.stretch {
        aspect-ratio: 16/9;
        max-height: none;
    }

    @media (min-width: 768px) {
        .today-cards {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .card-wrapper.stretch {
            grid-column: 1 / -1;
        }
    }
</style>
