<script lang="ts">
import type { TodayCard } from "$lib/types";

export let card: TodayCard;

$: bgColor = card.style === "dark" ? "#333" : "#fff";
$: textColor = card.style === "dark" ? "#fff" : "#000";
</script>

<a
    href={card.url}
    class="today-card"
    style:--bg={bgColor}
    style:--text={textColor}
>
    <div class="media">
        {#if card.isAppIcon}
            <AppIcon icon={card.media} size="large" />
        {:else}
            <Artwork artwork={card.media} alt="" />
        {/if}
    </div>

    <div class="content">
        {#if card.heading}
            <p class="heading">{card.heading}</p>
        {/if}
        <h3>{card.title}</h3>
    </div>
</a>

<style>
    .today-card {
        display: flex;
        flex-direction: column;
        aspect-ratio: 3 / 4;
        background: var(--bg);
        color: var(--text);
        border-radius: var(--border-radius-large);
        overflow: hidden;
        box-shadow: var(--shadow-small);
        text-decoration: none;
        transition:
            transform 0.2s ease-out,
            box-shadow 0.2s ease-out;
    }

    .today-card:hover {
        transform: scale(1.02);
        box-shadow: var(--shadow-medium);
    }

    .media {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .content {
        padding: 20px;
    }

    .heading {
        font: var(--callout);
        opacity: 0.7;
        margin-bottom: 4px;
    }

    h3 {
        font: var(--title-1);
    }
</style>
