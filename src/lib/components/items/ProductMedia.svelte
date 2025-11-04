<script lang="ts">
export let item: any;
</script>

<div class="media">
    <Artwork artwork={item.screenshot} alt="Screenshot" />
</div>

<style>
    .media {
        border-radius: 12px;
        overflow: hidden;
        background: var(--systemQuaternary);
    }
</style>
