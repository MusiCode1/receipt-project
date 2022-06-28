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
        Styles,
    } from "sveltestrap";

    import { Router, Link, Route } from "svelte-routing";

    import Providers from "./Providers.svelte";

    let isOpen: boolean = false;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }
</script>

<Styles />
<Container>
    <Router url="">
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Magen</NavbarBrand>

            <NavbarToggler on:click={() => (isOpen = !isOpen)} />

            <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
                <Nav class="ms-auto" navbar>
                    <NavItem>
                        <Link to="receipt" class="nav-link">Receipt</Link>
                    </NavItem>

                    <NavItem>
                        <Link to="providers" class="nav-link">Providers</Link>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

        <Route path="receipt" />
        <Route path="providers" component={Providers} />
    </Router>
</Container>
