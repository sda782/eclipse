<script lang="ts">
    import { onMount } from "svelte";
    import type { ytCommentWrapper } from "../../models/ytCommentWrapper";
    import { getVideoCommentThread } from "../../services/YoutubeAPI";
    import YtComment from "./YtCommentThread.svelte";

    export let videoId: string;
    let comments: ytCommentWrapper;
    onMount(async () => {
        const res: ytCommentWrapper = await getVideoCommentThread(videoId);
        console.log(res);
        comments = res;
    });
</script>

<h2>Comment box</h2>
{#if comments != undefined}
    {#each comments.items as commentThread}
        <YtComment {commentThread} />
    {/each}
{/if}
