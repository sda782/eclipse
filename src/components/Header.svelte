<script>
    import { Link } from "svelte-navigator";
    import { signed_in } from "../services/Store";
    import SignIn from "./Auth/signIn.svelte";
    import YtSearchInput from "./YoutubeApi/YtSearchInput.svelte";
</script>

<nav class="navbar navbar-light shadow bg-primary">
    <div class="container-fluid">
        <Link to="ytl" class="navbar-brand text-reset">
            <h1 style="font-size: 1.5em;">Eclipse - YT Client</h1>
        </Link>
        <YtSearchInput />
        <SignIn />
    </div>
</nav>
