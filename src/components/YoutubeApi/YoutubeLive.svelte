<script lang="ts">
    import { onMount } from "svelte";
    import { videoList } from "../../services/Store.js";
    import { getVideos } from "../../services/YoutubeAPI.js";
    import YtTopVideos from "./YtTopVideos.svelte";
    import YtSearchInput from "./YtSearchInput.svelte";
    import YtSearchResult from "./YtSearchResult.svelte";
    import { Route } from "svelte-navigator";

    onMount(async () => {
        const res = await getVideos();
        $videoList = res;
    });
</script>

<div class="d-flex">
    <h1 class="me-5">Youtube</h1>
    <YtSearchInput />
</div>
{#if $videoList != undefined}
    <div class="row justify-content-between">
        <Route path="/">
            <YtTopVideos />
        </Route>
        <Route path="/s/:searchTerm">
            <YtSearchResult />
        </Route>
    </div>
{:else}
    <p>no data</p>
{/if}
