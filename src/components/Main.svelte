<script lang="ts">
    import { Route } from "svelte-navigator";
    import Home from "./Home.svelte";
    import Sidebar from "./Sidebar.svelte";
    import YoutubeLive from "./YoutubeApi/YoutubeLive.svelte";
    import YtVideo from "./YoutubeApi/YtVideo.svelte";
</script>

<div class="container m-0 p-0 w-100" style="max-width: none;">
    <div class="row w-100">
        <div class="col-2 "><Sidebar /></div>
        <div class="col-10">
            <Route path="/" component={Home} />
            <Route path="/ytl/*" component={YoutubeLive} />
            <Route path="/ytv/:videoId" component={YtVideo} />
        </div>
    </div>
</div>
