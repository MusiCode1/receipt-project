<script lang="ts">
	import { enhance } from '$lib/form';
	import Form from '$lib/componants/provider-form.svelte';
	import { goto } from '$app/navigation';

	const on_create_provider = () => goto('/providers');
</script>

<h1 class="my-4">New provider</h1>

<form action="/providers?_method=PUT" method="POST" use:enhance on:submit={on_create_provider}>
	<Form />
</form>
