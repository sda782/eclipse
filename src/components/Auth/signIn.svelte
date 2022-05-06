<script lang="ts">
    import { signed_in } from "../../services/Store";
    const logOut = () => {
        $signed_in = false;
    };
    const logIn = () => {
        $signed_in = true;
    };
</script>

<div class="row">
    {#if $signed_in}
        <p class="col">Aevum</p>
        <button class="btn btn-outline-dark col" on:click={logOut}>
            log out
        </button>
    {:else}
        <button class="btn btn-outline-dark" on:click={logIn}> Sign in </button>
    {/if}
</div>
