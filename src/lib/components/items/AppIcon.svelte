<script lang="ts">
import type { Artwork } from "$lib/types";

export let icon: Artwork;
export const size: "small" | "medium" | "large" = "medium";

const _sizes = {
	small: "64px",
	medium: "100px",
	large: "128px",
};
</script>

<div class="app-icon" style:--size={sizes[size]}>
    <img src={icon.url} alt="" />
</div>

<style>
    .app-icon {
        width: var(--size);
        height: var(--size);
        border-radius: 23%;
        overflow: hidden;
        box-shadow: 0 0 0 1px var(--systemQuaternary);
    }

    img {
        width: 100%;
        height: 100%;
        display: block;
    }
</style>
