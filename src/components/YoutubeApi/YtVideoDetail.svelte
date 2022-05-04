<script lang="ts">
    import type { ytVideoDetail } from "../../models/ytVideoDetail.js";

    export let videoDetail: ytVideoDetail;
</script>

<div class="p-2 shadow rounded">
    {#if videoDetail != undefined}
        <h2>{videoDetail.snippet.title}</h2>
        <p>{videoDetail.snippet.description}</p>
    {/if}
</div>
