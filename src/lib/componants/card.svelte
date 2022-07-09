<script lang="ts">
	import { enhance } from '$lib/form';
	import type { Provider } from '$lib/types';
	import truck_img from '$lib/img/truck-svgrepo-com.svg';

	export let provider: Provider;
</script>

<div class="col-sm-6 col-md-4 col-lg-3 mb-4">
	<div class="provider-card">
		<h5 class="card-title pt-4">{provider.name}</h5>

		<!-- <div class="a" /> -->

		<div class="avatar-warp">
			{#if provider.avatar}
				<img class="avatar card-img" src="/images/{provider.avatar}" alt="provider icon" />
			{:else}
				<img class="avatar card-img" src={truck_img} alt="provider icon" />
			{/if}
		</div>

		<div class="card-body">
			<p class="card-text">
				{provider.name}
				<br />
				{provider.address}
			</p>
			<div class="row">
				<div class="col">
					<a href="/providers/edit/{provider.id}" class="button-shadow btn btn-light">✏️</a>
				</div>
				<div class="col">
					<form action="/providers?_method=DELETE" method="POST" use:enhance>
						<input name="id" type="hidden" value={provider.id} />
						<button class="button-shadow btn btn-light" type="submit">🗑️</button>
					</form>
				</div>
			</div>
		</div>

	</div>
</div>

<style>
	.avatar-warp {
		padding: 20px;
	}

	.avatar {
		max-height: 250px;
		max-width: 250px;
		box-shadow: 0 0 34px 0 rgb(0 0 0 / 30%);
		border-radius: 50%;
		background-color: aquamarine;
		object-fit: cover;
	}

	.provider-card {
		position: relative;
		/* max-width: 400px; */
		background-color: white;
		border-radius: 20px;
		box-shadow: 0px 0px 10px 0px;

		animation-name: example;
		animation-duration: 0.5s;
	}

	.button-shadow {
		box-shadow: 0ch 0ch 7px 3px rgb(0 0 0 / 24%);
	}
	.a {
		position: absolute;
		height: 260px;
		background-color: #00000036;
		width: 246px;
		top: 177px;
		border-radius: 0 0 20px 20px;
	}

	/* Small devices (landscape phones, 576px and up) */
	@media (min-width: 576px) {
		.avatar {
			height: 206px;
			width: 206px;
		}
	}

	/* Medium devices (tablets, 768px and up) */
	@media (min-width: 768px) {
		.avatar {
			height: 170px;
			width: 170px;
		}
		.provider-card {
			max-width: 285px;
		}
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
</style>
