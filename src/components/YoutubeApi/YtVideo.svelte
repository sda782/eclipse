<script lang="ts">
    import { onMount } from "svelte";
    import { useParams } from "svelte-navigator";
    import type { ytVideoDetail } from "../../models/ytVideoDetail.js";
    import type { ytVideoWrapper } from "../../models/ytVideoWrapper.js";
    import { getVideoFromId } from "../../services/YoutubeAPI.js";
    import YtCommentBox from "./YtCommentBox.svelte";
    import YtVideoDetail from "./YtVideoDetail.svelte";

    let params = useParams();
    let videoDetail: ytVideoDetail;

    onMount(async () => {
        const res: ytVideoWrapper = await getVideoFromId($params.videoId);
        videoDetail = res.items[0];
    });
</script>

{#if videoDetail != undefined}
    <h1>{videoDetail.snippet.title}</h1>
{/if}
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/{$params.videoId}?autoplay=1"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
/>
<YtVideoDetail {videoDetail} />
<YtCommentBox videoId={$params.videoId} />
