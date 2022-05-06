<script lang="ts">
    import { onMount } from "svelte";
    import type { ytCommentWrapper } from "../../models/ytCommentWrapper.js";
    import { getVideoCommentThread } from "../../services/ApiManager.js";
    import YtComment from "./YtCommentThread.svelte";

    export let videoId: string;
    let comments: ytCommentWrapper;
    onMount(async () => {
        const res: ytCommentWrapper = await getVideoCommentThread(videoId);
        comments = res;
    });
</script>

<div class="p-2  m-2 shadow rounded">
    <h2>Comments</h2>
    {#if comments != undefined}
        {#each comments.items as commentThread}
            <YtComment {commentThread} />
        {/each}
    {/if}
</div>
