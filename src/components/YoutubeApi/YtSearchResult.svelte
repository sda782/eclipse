<script lang="ts">
    import { onMount } from "svelte";

    import { useParams } from "svelte-navigator";
    import type { ytSearchWrapper } from "../../models/ytSearchWrapper";
    import { videoList } from "../../services/Store";
    import { getVideoFromSearch } from "../../services/YoutubeAPI";
    import YtCard from "./YtCard.svelte";
    const params = useParams();
    onMount(async () => {
        const res: ytSearchWrapper = await getVideoFromSearch(search_term);
        $videoList = res;
    });
    let search_term = $params.searchTerm;
</script>

{#if search_term != ""}
    <p>show result for {search_term}</p>
{/if}
{#each $videoList.items as item}
    <div class="col-3 mb-4 ">
        <YtCard data={item} />
    </div>
{/each}
