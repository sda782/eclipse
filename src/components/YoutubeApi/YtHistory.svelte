<script lang="ts">
    import { watch_history } from "../../services/Store";
    import YtCard from "./YtCard.svelte";
</script>

<h3>Watch History</h3>
<div class="row">
    {#each $watch_history as item}
        <div class="col-3 mb-4 ">
            <YtCard data={item} />
        </div>
    {/each}
</div>
