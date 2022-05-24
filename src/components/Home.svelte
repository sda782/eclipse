<script lang="ts">
    import { Link } from "svelte-navigator";
</script>

<div class="">
    <h1>Welcome to eclipse</h1>
    <h6><i>created by Andreas</i></h6>
    <p>
        This app is created as part of my 4 semester exam. And demostrate how
        svelte can be used to create a Single Page Application.
    </p>
    <p>
        Currently the app uses the Youtube Data Api to show top videos, as well
        as let you search for videos
    </p>
    <Link to="ytl" class="btn btn-primary">Explore</Link>
</div>
