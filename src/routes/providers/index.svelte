<script lang="ts">
	import { Row } from 'sveltestrap';

	import Card from '$lib/componants/card.svelte';
	import type { Provider } from '$lib/types';

	export let providers: Provider[];
</script>

<h1 class="my-4">Providers</h1>

<!-- <Button color="light" class="mb-4 button-shadow" >➕</Button> -->
<a href="./providers/new" class="mb-4 btn button-shadow btn-light">➕</a>

<Row>
	{#each providers as provider}
		<Card {provider} />
	{/each}
</Row>

<style>

</style>
