<script lang="ts">
    import YtCard from "./YtCard.svelte";
    export let videoList;
</script>

{#if videoList != undefined}
    {#each videoList.items as item}
        {#if item.id.kind == "youtube#video"}
            <div class="col-3 mb-4 ">
                <YtCard data={item} />
            </div>
        {/if}
    {/each}
{/if}
