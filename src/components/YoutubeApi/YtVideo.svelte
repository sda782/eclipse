<script lang="ts">
    import { onMount } from "svelte";
    import { useNavigate, useParams } from "svelte-navigator";
    import type { ytVideoDetail } from "../../models/ytVideoDetail.js";
    import type { ytVideoWrapper } from "../../models/ytVideoWrapper.js";
    import { getVideoFromId } from "../../services/ApiManager.js";
    import { watch_history } from "../../services/Store.js";
    import YtCommentBox from "./YtCommentBox.svelte";
    import YtVideoDetail from "./YtVideoDetail.svelte";

    let params = useParams();
    let videoDetail: ytVideoDetail;
    const nav = useNavigate();

    onMount(async () => {
        const res: ytVideoWrapper = await getVideoFromId($params.videoId);
        videoDetail = res.items[0];
        addToHistory(videoDetail);
    });

    const addToHistory = (vid) => {
        $watch_history = [...$watch_history, vid];
    };
</script>

<button
    class="btn btn-secondary p-2 mb-2"
    on:click={() => {
        nav(-1);
    }}>return to search</button
>
{#if videoDetail != undefined}
    <div class="row">
        <div class="col">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/{$params.videoId}?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allowfullscreen
            />
            <YtVideoDetail {videoDetail} />
        </div>
        <div class="col">
            <YtCommentBox videoId={$params.videoId} />
        </div>
    </div>
{/if}
