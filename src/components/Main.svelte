<script lang="ts">
    import { Route } from "svelte-navigator";
    import Home from "./Home.svelte";
    import Sidebar from "./Sidebar.svelte";
    import YtContentContainer from "./YoutubeApi/YtContentContainer.svelte";
    import YtHistory from "./YoutubeApi/YtHistory.svelte";
    import YtVideo from "./YoutubeApi/YtVideo.svelte";
</script>

<div class="container m-0 p-0 w-100 h-100" style="max-width: none;">
    <div class="row w-100 h-100">
        <div class="col-2  pe-0 shadow"><Sidebar /></div>
        <div class="col-10 p-4">
            <Route path="/" component={Home} />
            <Route path="/ytl/*" component={YtContentContainer} />
            <Route path="/ytv/:videoId" component={YtVideo} />
            <Route path="/yth/" component={YtHistory} />
        </div>
    </div>
</div>
