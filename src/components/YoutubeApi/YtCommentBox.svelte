<script lang="ts">
    import { onMount } from "svelte";
    import type { ytCommentThread } from "../../models/ytCommentThread";
    import { getVideoCommentThread } from "../../services/YoutubeAPI";
    import YtComment from "./YtComment.svelte";

    export let videoId: string;
    let commentThread: ytCommentThread;
    onMount(async () => {
        const res: ytCommentThread = await getVideoCommentThread(videoId);
        commentThread = res;
    });
</script>

<h2>Comment box</h2>
{#if commentThread != undefined}
    <p>{commentThread.kind}</p>
    {#each commentThread.replies.comments as comment}
        <YtComment {comment} />
    {/each}
{/if}
