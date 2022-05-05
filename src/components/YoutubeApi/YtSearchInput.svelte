<script lang="ts">
    import { useNavigate } from "svelte-navigator";

    const nav = useNavigate();

    let search_term: string = "";
    const search_btn = () => {
        console.log("click");
        nav(search_term);
    };
</script>

<div class="row w-25 h-100 mt-1">
    <input
        class="form-control col-10"
        type="text"
        placeholder="search video"
        bind:value={search_term}
    />
    <button class="btn btn-primary col-2" on:click={search_btn}
        ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
        >
            <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
        </svg></button
    >
</div>
