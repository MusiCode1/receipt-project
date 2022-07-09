<script lang="ts">
	import truck_img from '$lib/img/truck-svgrepo-com.svg';
	import type { Provider } from '$lib/types';

	export let provider: Provider = {
		id: 0,
		name: '',
		address: '',
		avatar: ''
	};

	let photo_input: HTMLInputElement,
		avatar = provider.avatar ? `/images/${provider.avatar}` : truck_img;

	const on_change_photo = (e: Event) => {
		const files = (e.target as HTMLInputElement).files as FileList;

		let reader = new FileReader();

		reader.readAsDataURL(files[0]);
		reader.onload = (e) => {
			avatar = e.target?.result as string;
		};
	};
</script>

<div class="row justify-content-center">
	<div class="mb-4 col-md-7 col-lg-5">
		<div class="form">
			<h2 id="provider_name">{provider.name}</h2>
			<img class="avatar" src={avatar} alt="provider icon" on:click={() => photo_input.click()} />
			<p>Click to change the image</p>

			<div class="mb-3 form-floating">
				<input
					type="text"
					name="name"
					class="form-control"
					placeholder="A"
					bind:value={provider.name}
					maxlength="40"
				/>
				<label for="name">Name</label>
			</div>

			<div class="mb-3 form-floating">
				<input
					type="text"
					name="address"
					class="form-control"
					placeholder="A"
					bind:value={provider.address}
				/>
				<label for="name">Address</label>
			</div>

			<input type="file" bind:this={photo_input} name="file" on:change={on_change_photo} />
			<input type="hidden" bind:value={provider.id} name="id" />
			<input type="hidden" bind:value={provider.avatar} name="avatar" />

			<button type="submit" class="btn btn-secondary">OK</button>
			<a href="/providers" class="btn btn-secondary">return to providers</a>
		</div>
	</div>
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
