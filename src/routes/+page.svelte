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

    {#each page.shelves as shelf, i}
        {@const stretchFirst = i % 2 === 0}
        <Shelf {shelf}>
            <div
                class="today-cards"
                class:single-card={shelf.items.length === 1}
                class:two-cards={shelf.items.length === 2}
                class:stretch-first={stretchFirst}
            >
                {#each shelf.items as card}
                    <div class="card-wrapper">
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
        font: var(--large-title-emphasized);
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
        min-height: 100px;
    }

    .today-cards.single-card .card-wrapper {
        aspect-ratio: 16/9;
        max-height: none;
    }

    @media (min-width: 768px) {
        .today-cards {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        .today-cards.single-card .card-wrapper {
            grid-column: 1 / -1;
        }

        .today-cards.two-cards.stretch-first .card-wrapper:first-child {
            grid-column: 1 / 3;
        }

        .today-cards.two-cards:not(.stretch-first) .card-wrapper:last-child {
            grid-column: 1 / 3;
        }
    }
</style>
