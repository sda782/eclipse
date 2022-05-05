<script>
	import Header from "./components/Header.svelte";
	import Main from "./components/Main.svelte";
	import { Router } from "svelte-navigator";
</script>

<Router>
	<div class="h-100">
		<div class="sticky-top">
			<Header />
		</div>
		<div class="h-100">
			<Main />
		</div>
	</div>
</Router>
