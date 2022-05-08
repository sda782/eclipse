<script lang="ts">
    import { signed_in, watch_history } from "../../services/Store";
    import YtCard from "./YtCard.svelte";
</script>

<h3>Watch History</h3>
{#if $signed_in}
    <div class="row">
        {#if $watch_history.length !== 0}
            {#each $watch_history as item}
                <div class="col-3 mb-4 ">
                    <YtCard data={item} />
                </div>
            {/each}
        {:else}
            <p>Start watching videos :D</p>
        {/if}
    </div>
{:else}
    <p>Log in to save watched videos</p>
{/if}
