<script lang="ts">
    import { useParams } from "svelte-navigator";
    import YtCommentBox from "./YtCommentBox.svelte";

    let params = useParams();
</script>

<h1>Watch Video</h1>
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/{$params.videoId}?autoplay=1"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
/>
<YtCommentBox videoId={$params.videoId} />
