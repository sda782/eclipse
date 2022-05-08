<script lang="ts">
    import { onMount } from "svelte";
    import { useParams } from "svelte-navigator";
    import { getVideoFromSearch } from "../../services/ApiManager.js";
    import YtVideoList from "./YtVideoList.svelte";

    const params = useParams();
    let videoList = undefined;
    onMount(async () => {
        const res = await getVideoFromSearch(search_term);
        videoList = res;
    });
    let search_term = $params.searchTerm;
</script>

<h3>Search Result</h3>
{#if search_term != ""}
    <p><i>show result for <strong>{search_term}</strong></i></p>
{/if}
<YtVideoList {videoList} />
