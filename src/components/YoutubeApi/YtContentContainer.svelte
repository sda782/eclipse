<script lang="ts">
    import YtTopVideos from "./YtTopVideos.svelte";
    import YtSearchInput from "./YtSearchInput.svelte";
    import YtSearchResult from "./YtSearchResult.svelte";
    import { Route } from "svelte-navigator";
</script>

<!-- <div class="d-flex mb-2">
    <h1 class="me-5">Search</h1>
<YtSearchInput />
</div> -->
<div class="row">
    <Route path="/">
        <YtTopVideos />
    </Route>
    <Route path=":searchTerm">
        <YtSearchResult />
    </Route>
</div>
