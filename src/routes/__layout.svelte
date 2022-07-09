<script lang="ts">
	import {
		Container,
		Collapse,
		Navbar,
		NavbarToggler,
		NavbarBrand,
		Nav,
		NavItem,
		NavLink,
		Styles
	} from 'sveltestrap';

	let isOpen: boolean = false;

	function handleUpdate(event: CustomEvent) {
		isOpen = event.detail.isOpen;
	}
</script>

<Styles />

<Navbar color="dark" dark expand="md">
	<NavbarBrand href="/">Magen</NavbarBrand>

	<NavbarToggler on:click={() => (isOpen = !isOpen)} />

	<Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
		<Nav class="ms-auto" navbar>
			<NavItem>
				<NavLink href="/receipt">Receipt</NavLink>
			</NavItem>

			<NavItem>
				<NavLink href="/providers">Providers</NavLink>
			</NavItem>
		</Nav>
	</Collapse>
</Navbar>
<Container class="text-center">
	<slot />
</Container>

<style>
	:global(body) {
		background-color: #d7d7d7;
	}

	:global(.navbar) {
		position: sticky;
		top: 0;
		z-index: 1;
	}
</style>
