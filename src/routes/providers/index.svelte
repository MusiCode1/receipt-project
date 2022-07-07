<script lang="ts">
	import {
		Modal,
		ModalHeader,
		ModalBody,
		Card,
		CardHeader,
		CardTitle,
		CardBody,
		CardText,
		CardImg,
		Col,
		Row,
		FormGroup,
		Input,
		Button
	} from 'sveltestrap';

	import { enhance } from '$lib/form';

	import type { Provider } from '$lib/types';

	import truck_img from '$lib/img/truck-svgrepo-com.svg';

	let form: Provider = {
		id: 0,
		name: '',
		address: ''
	};

	let is_open = {
		edit: false,
		create: false
	};

	const toggle = {
		edit: () => (is_open.edit = !is_open.edit),
		create: () => (is_open.create = !is_open.create)
	};

	const on_edit_form = (provider: Provider) => {
		form = provider;
		toggle.edit();
	};

	const on_open_create_from = () => {
		form = {
			id: 0,
			name: '',
			address: ''
		};

		form.id = providers.length;
		toggle.create();
	};

	export let providers: Provider[];
</script>

<h1 class="my-4">Providers</h1>

<!-- <Button color="light" class="mb-4 button-shadow" >➕</Button> -->
<a href="./providers/new" class="mb-4 btn button-shadow btn-light">➕</a>

<Row>
	{#each providers as provider}
		{#if provider}
			<Col sm="6" md="4" lg="3" class="mb-4">
				<Card class="">
					{#if provider.avatar}
						<img class="card-img avatar" src="./imges/{provider.avatar}" alt="provider icon" />
					{:else}
						<img class="card-img avatar" src={truck_img} alt="provider icon" />
					{/if}

					<!-- <CardHeader> -->
					<CardTitle>
						{provider.name}
					</CardTitle>
					<!-- </CardHeader> -->
					<CardBody>
						<CardText>
							{provider.name}
							<br />
							{provider.address}
						</CardText>
						<Row>
							<Col>
								<Button class="button-shadow" on:click={() => on_edit_form(provider)} color="light"
									>✏️</Button
								>
							</Col>
							<Col>
								<form action="/providers?_method=DELETE" method="POST" use:enhance>
									<input name="id" type="hidden" value={provider.id} />
									<Button class="button-shadow" color="light" type="submit">🗑️</Button>
								</form>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
		{/if}
	{/each}
</Row>

<Modal toggle={toggle.edit} isOpen={is_open.edit}>
	<ModalHeader>Edit provider</ModalHeader>
	<ModalBody>
		<form method="POST" use:enhance on:submit={toggle.edit}>
			<FormGroup floating label="Name">
				<Input placeholder="Enter a value" bind:value={form.name} name="name" />
			</FormGroup>

			<FormGroup floating label="Address">
				<Input placeholder="Enter a value" type="text" bind:value={form.address} name="address" />
			</FormGroup>

			<input type="hidden" bind:value={form.id} name="id" />

			<Button type="submit">OK</Button>
			<Button
				on:click={(e) => {
					e.preventDefault();
					toggle.edit();
				}}>Cancel</Button
			>
		</form>
	</ModalBody>
</Modal>

<Modal toggle={toggle.create} isOpen={is_open.create}>
	<ModalHeader>Create provider</ModalHeader>
	<ModalBody>
		<form method="POST" use:enhance on:submit={toggle.create} action="/providers?_method=PUT">
			<FormGroup floating label="Name">
				<Input placeholder="Enter a value" bind:value={form.name} name="name" />
			</FormGroup>

			<FormGroup floating label="Address">
				<Input placeholder="Enter a value" type="text" bind:value={form.address} name="address" />
			</FormGroup>

			<input type="file" />

			<input type="hidden" bind:value={form.id} name="id" />

			<Button type="submit">OK</Button>
			<Button
				on:click={(e) => {
					e.preventDefault();
					toggle.create();
				}}>Cancel</Button
			>
		</form>
	</ModalBody>
</Modal>

<style>
	:global(.card) {
		box-shadow: 0px 0px 10px 0px;
		animation-name: example;
		animation-duration: 1s;
		border-radius: 20px;
		align-items: center;
		/* min-width: 260px; */
	}

	@keyframes example {
		from {
			top: 600px;
		}
		to {
			top: 0;
			left: 0;
		}
	}

	:global(.button-shadow) {
		box-shadow: 0px 0px 5px 0px;
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
</style>
