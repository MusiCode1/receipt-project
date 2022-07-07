<script lang="ts">
	import truck_img from '$lib/img/truck-svgrepo-com.svg';
	import { goto } from '$app/navigation';
	import { enhance } from '$lib/form';
import { noop } from 'svelte/internal';

	let photo_input: HTMLInputElement,
		avatar_img = truck_img,
		provider_name: string = '';

	const on_change_photo = (e: Event) => {
		const files = (e.target as HTMLInputElement).files as FileList;

		let reader = new FileReader();

		reader.readAsDataURL(files[0]);
		reader.onload = (e) => {
			avatar_img = e.target?.result as string;
		};
	};

	const create_provider = () => goto('/providers');
</script>

<div class="form">
	<form action="/providers?_method=PUT" method="POST" use:enhance on:submit="{create_provider}">
		<h2 id="provider_name">{provider_name}</h2>
		<img class="avatar" src={avatar_img} alt="provider icon" on:click={() => photo_input.click()} />
		<p>Click to change the image</p>

		<div class="mb-3 form-floating">
			<input
				type="text"
				name="name"
				class="form-control"
				placeholder="A"
				bind:value={provider_name}
				maxlength="40"
			/>
			<label for="name">Name</label>
		</div>

		<div class="mb-3 form-floating">
			<input type="text" name="address" class="form-control" placeholder="A" />
			<label for="name">Address</label>
		</div>

		<input type="file" bind:this={photo_input} name="file" on:change={on_change_photo} />

		<button type="submit" class="btn btn-secondary">OK</button>
		<a href="./" class="btn btn-secondary">return to providers</a>
	</form>
</div>

<style>
	#provider_name {
		min-height: 50px;
		overflow: hidden;
	}

	.form {
		/* max-width: 150px; */
		box-shadow: 0 10px 34px -15px rgb(0 0 0 / 24%);
		background-color: #ffffff;
		padding: 30px;
		border-radius: 20px;
	}

	.avatar {
		height: 200px;
		width: 200px;
		box-shadow: 0 10px 34px -15px rgb(0 0 0 / 24%);
		border-radius: 50%;
		margin: 10px;
		background-color: aquamarine;
		cursor: pointer;
		object-fit: cover;
	}

	input[type='file'] {
		display: none;
	}
</style>
