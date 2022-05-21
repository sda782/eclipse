<script lang="ts">
    import { Link } from "svelte-navigator";

    import type { ytVideoRes } from "../../models/ytVideoRes.js";

    export let data: ytVideoRes;
    let info = data.snippet;
    let id: string;
    if (data.id.videoId !== undefined) id = data.id.videoId;
    else id = data.id.toString();
    console.log(data);
</script>

<Link to="/ytv/{id}" class="card shadow bg-white text-reset">
    <img class="card-img-top" src={info.thumbnails.high.url} alt="vid thumb" />
    <div
        class="p-3 overflow-hidden"
        style="max-height: 12em; min-height: 12em;"
    >
        <h4 class="card-title">{info.title}</h4>
        <p>{info.publishedAt.substring(0, info.publishedAt.length - 10)}</p>
    </div>
</Link>
