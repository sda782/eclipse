<script lang="ts">
    import { Link } from "svelte-navigator";

    import type { ytVideoRes } from "../../models/ytVideoRes.js";

    export let data: ytVideoRes;
    let info = data.snippet;
</script>

<Link to="/ytv/{data.id.videoId}" class="card shadow bg-white text-reset">
    <img class="card-img-top" src={info.thumbnails.high.url} alt="vid thumb" />
    <div
        class="p-3 overflow-hidden"
        style="max-height: 12em; min-height: 12em;"
    >
        <h4 class="card-title">{info.title}</h4>
        <p class="card-text">{info.description}</p>
    </div>
</Link>
