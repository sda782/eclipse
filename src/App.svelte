<script>
	import Header from "./components/Header.svelte";
	import Main from "./components/Main.svelte";
	import { Router } from "svelte-navigator";
</script>

<Router>
	<div class="sticky-top">
		<Header />
	</div>
	<div class="container mt-5">
		<Main />
	</div>
</Router>
