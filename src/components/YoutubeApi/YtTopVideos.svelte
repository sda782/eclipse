<script lang="ts">
    import { onMount } from "svelte";
    import { getVideos } from "../../services/ApiManager.js";
    import YtVideoList from "./YtVideoList.svelte";
    let videoList = undefined;
    onMount(async () => {
        const res = await getVideos();
        videoList = res;
    });
</script>

<YtVideoList {videoList} />
