<script lang="ts">
    import { videoList } from "../../services/Store";
    import YtCard from "./YtCard.svelte";
</script>

{#each $videoList.items as item}
    <div class="col-3 mb-4 ">
        <YtCard data={item} />
    </div>
{/each}
