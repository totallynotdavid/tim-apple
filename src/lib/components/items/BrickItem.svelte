<script lang="ts">
export let item: any;
</script>

<a href={item.url} class="brick">
    <Artwork artwork={item.media} alt="" />
    <div class="overlay">
        {#if item.heading}
            <p class="heading">{item.heading}</p>
        {/if}
        <h3>{item.title}</h3>
    </div>
</a>

<style>
    .brick {
        position: relative;
        aspect-ratio: 16 / 9;
        border-radius: var(--border-radius-large);
        overflow: hidden;
        display: block;
        box-shadow: var(--shadow-small);
        transition:
            transform 0.2s ease-out,
            box-shadow 0.2s ease-out;
    }

    .brick:hover {
        transform: scale(1.02);
        box-shadow: var(--shadow-medium);
    }

    .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 20px;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
        color: white;
    }

    .heading {
        font: var(--callout);
        opacity: 0.8;
        margin-bottom: 4px;
    }

    h3 {
        font: var(--title-1);
    }
</style>
