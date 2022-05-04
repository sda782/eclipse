<script lang="ts">
    import { onMount } from "svelte";
    import type { ytLiveRes } from "../../models/ytLiveRes.js";
    import { getVideos } from "../../services/YoutubeAPI.js";
    import YtCard from "./YtCard.svelte";

    let data: ytLiveRes;
    onMount(async () => {
        const res = await getVideos();
        data = res;
    });
</script>

<h1>Youtube live</h1>
{#if data != undefined}
    <div class="row justify-content-between">
        {#each data.items as item}
            <div class="col-3 mb-4 ">
                <YtCard data={item} />
            </div>
        {/each}
    </div>
{:else}
    <p>no data</p>
{/if}
