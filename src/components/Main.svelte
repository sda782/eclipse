<script lang="ts">
    import { Route } from "svelte-navigator";
    import Home from "./Home.svelte";
    import YoutubeLive from "./YoutubeApi/YoutubeLive.svelte";
    import YtVideo from "./YoutubeApi/YtVideo.svelte";
</script>

<Route path="/">
    <Home />
</Route>
<Route path="/ytl">
    <YoutubeLive />
</Route>
<Route path="ytv/:videoId">
    <YtVideo />
</Route>
