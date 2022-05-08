<script lang="ts">
    import { Link } from "svelte-navigator";
</script>

<!-- <h2 class="ps-4">Menu</h2> -->
<ul class="list-group list-group-flush">
    <li class="divider" />
    <li class="list-group-item list-group-item-action">
        <Link to="ytl" class="nav-link text-reset"><h6>Top videos</h6></Link>
    </li>
    <li class="list-group-item list-group-item-action">
        <Link to="yth" class="nav-link text-reset"><h6>Watch history</h6></Link>
    </li>
    <li class="list-group-item list-group-item-action">
        <Link to="yts/UCffTrvqdA3frhdxOayWWYCw" class="nav-link text-reset">
            <h6>My subscriptions</h6>
        </Link>
    </li>
</ul>
