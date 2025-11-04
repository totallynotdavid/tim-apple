<script lang="ts">
import type { NavigationTab } from "$lib/types";

export let tab: NavigationTab;
export const active = false;
</script>

<a href={tab.url} class="nav-item" class:active>
    <span class="icon">{tab.icon}</span>
    <span class="label">{tab.label}</span>
</a>

<style>
    .nav-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 12px;
        border-radius: 8px;
        font: var(--title-2);
        color: var(--systemPrimary);
        text-decoration: none;
        transition: background-color 0.2s;
    }

    .nav-item:hover {
        background: var(--systemQuinary);
    }

    .nav-item.active {
        background: var(--systemQuinary);
    }

    .icon {
        font-size: 24px;
        width: 32px;
        text-align: center;
    }

    @media (max-width: 767px) {
        .nav-item {
            font: var(--title-3);
        }
    }
</style>
