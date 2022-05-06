<script lang="ts">
    import { onMount } from "svelte";
    import { useParams } from "svelte-navigator";
    import { getSubscriptions } from "../../services/ApiManager";
    let params = useParams();
    let channel_data;
    /* onMount(async () => {
        channel_data = await getSubscriptions($params.channelId);
    }); */
</script>

<h2>YtSubscriptions - WIP</h2>
{#if channel_data != undefined}
    {channel_data}
{/if}
