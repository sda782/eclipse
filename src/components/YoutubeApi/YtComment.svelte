<script lang="ts">
    import type { ytComment } from "../../models/ytComment";

    export let comment: ytComment;
</script>

<h5>{comment.snippet.textDisplay}</h5>
