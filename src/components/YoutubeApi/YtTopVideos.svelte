<script lang="ts">
    import { onMount } from "svelte";
    import { getVideos } from "../../services/YoutubeAPI";
    import YtCard from "./YtCard.svelte";
    let videoList = undefined;
    onMount(async () => {
        const res = await getVideos();
        videoList = res;
    });
</script>

{#if videoList != undefined}
    {#each videoList.items as item}
        <div class="col-4 mb-4 ">
            <YtCard data={item} />
        </div>
    {/each}
{/if}
