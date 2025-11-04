<script lang="ts">
import type { LockupItem } from "$lib/types";
import AppIcon from "./AppIcon.svelte";

export let item: LockupItem;
export const size: "small" | "medium" = "small";
</script>

<a href={item.url} class="lockup lockup-{size}">
    <AppIcon icon={item.icon} size={size === "small" ? "small" : "medium"} />

    <div class="info">
        <h3>{item.title}</h3>
        {#if item.subtitle}
            <p>{item.subtitle}</p>
        {/if}
    </div>

    <span class="btn btn-gray">View</span>
</a>

<style>
    .lockup {
        display: flex;
        align-items: center;
        gap: 16px;
        text-decoration: none;
    }

    .info {
        flex: 1;
        min-width: 0;
    }

    h3 {
        font: var(--title-3);
        color: var(--systemPrimary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    p {
        font: var(--callout);
        color: var(--systemSecondary);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .lockup-medium h3 {
        font: var(--title-2);
    }
</style>
