<script lang="ts">
	import { enhance } from '$lib/form';
	import Form from '$lib/componants/provider-form.svelte';
	import { goto } from '$app/navigation';
	import type { Provider } from '$lib/types';
    
	const on_edit_provider = () => goto('/providers');

	export let provider: Provider;

</script>

<h1 class="my-4">Edit provider</h1>

<form action="/providers/edit/{provider.id}" method="POST" use:enhance on:submit={on_edit_provider}>
	<Form {provider} />
</form>
