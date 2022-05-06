<script lang="ts">
    import YtTopVideos from "./YtTopVideos.svelte";
    import YtSearchInput from "./YtSearchInput.svelte";
    import YtSearchResult from "./YtSearchResult.svelte";
    import { Route } from "svelte-navigator";
</script>

<div class="row">
    <Route path="/">
        <YtTopVideos />
    </Route>
    <Route path=":searchTerm">
        <YtSearchResult />
    </Route>
</div>
