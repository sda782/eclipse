<script lang="ts">
    import { onMount } from "svelte";
    import type { ytCommentWrapper } from "../../models/ytCommentWrapper.js";
    import { getVideoCommentThread } from "../../services/YoutubeAPI.js";
    import YtComment from "./YtCommentThread.svelte";

    export let videoId: string;
    let comments: ytCommentWrapper;
    onMount(async () => {
        const res: ytCommentWrapper = await getVideoCommentThread(videoId);
        console.log(res);
        comments = res;
    });
</script>

<h4>Comment box</h4>
{#if comments != undefined}
    {#each comments.items as commentThread}
        <YtComment {commentThread} />
    {/each}
{/if}
