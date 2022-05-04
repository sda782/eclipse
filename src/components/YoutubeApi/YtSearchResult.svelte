<script lang="ts">
    import { useParams } from "svelte-navigator";
    import { videoList } from "../../services/Store";
    import YtCard from "./YtCard.svelte";
    const params = useParams();
    let search_term = $params.searchTerm;
</script>

{#if search_term != ""}
    <p>show result for {search_term}</p>
{/if}
{#each $videoList.items as item}
    <div class="col-3 mb-4 ">
        <YtCard data={item} />
    </div>
{/each}
