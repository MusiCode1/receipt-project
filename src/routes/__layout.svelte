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

<Container class="text-center">
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
    <slot></slot>
</Container>
