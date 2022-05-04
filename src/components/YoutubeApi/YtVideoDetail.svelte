<script lang="ts">
    import type { ytVideoDetail } from "../../models/ytVideoDetail.js";

    export let videoDetail: ytVideoDetail;
</script>

<h2>{videoDetail.snippet.title}</h2>
