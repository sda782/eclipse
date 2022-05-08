<script lang="ts">
    import type { ytCommentThread } from "../../models/ytCommentThread";

    export let commentThread: ytCommentThread;
    let topComment = commentThread.snippet.topLevelComment.snippet;
</script>

<div class="p-2 m-2 ">
    <h5>{topComment.textDisplay}</h5>
    <p><i>{topComment.authorDisplayName}</i></p>
</div>
