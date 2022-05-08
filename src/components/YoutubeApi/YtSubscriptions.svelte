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

<h3>YtSubscriptions - WIP</h3>
{#if channel_data != undefined}
    {channel_data}
{/if}
