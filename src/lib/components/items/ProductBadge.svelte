<script lang="ts">
import StarRating from "$lib/components/shared/StarRating.svelte";
import type { ProductBadgeItem } from "$lib/types";

export let item: ProductBadgeItem;
</script>

<div class="badge">
    <p class="heading">{item.heading}</p>
    <div class="value">
        {#if item.type === "rating"}
            <span class="large">{item.text}</span>
            {#if item.rating !== undefined}
                <StarRating rating={item.rating} />
            {/if}
        {:else if item.type === "award"}
            <span>⭐</span>
        {:else}
            <span class="large">{item.text}</span>
        {/if}
    </div>
</div>

<style>
    .badge {
        text-align: center;
        padding: 16px;
    }

    .heading {
        font: var(--subhead);
        color: var(--systemSecondary);
        text-transform: uppercase;
        margin-bottom: 8px;
    }

    .value {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
    }

    .large {
        font: var(--title-1);
        color: var(--systemPrimary);
    }
</style>
