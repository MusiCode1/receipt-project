<script lang="ts">
    import {
        Modal,
        ModalHeader,
        ModalBody,
        Spinner,
        Card,
        CardHeader,
        CardTitle,
        CardBody,
        CardText,
        Col,
        Row,
        Form,
        FormGroup,
        Input,
        Button,
    } from "sveltestrap";
    import { Providers, Provider } from "./Providers";

    const providers = new Providers();

    let open = false;
    let list: Provider[];

    const get_providers = async () => {
        list = await providers.get();
        return list;
    };

    let edit_form: Provider = {
        id: 0,
        name: "",
        address: "",
    };

    const toggle = () => (open = !open);

    const edit = (provider: Provider) => {
        edit_form = provider;
        toggle();
    };

    const update = async () => {
        toggle();
        list = await providers.update(edit_form);
    };

    const remove = async (provider: Provider) => {
        list = await providers.remove(provider);

    }
</script>

<div class="text-center">
    <h1 class="my-4">Providers</h1>

    {#await get_providers()}
        <p>...waiting</p>
        <Spinner />
    {:then data}
        <Row>
            {#each list as provider}
                <Col sm="6" md="4" lg="3" xl="2" class="mb-4">
                    <Card class="">
                        <CardHeader>
                            <CardTitle>
                                {provider.name}
                            </CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>
                                {provider.name}
                                <br />
                                {provider.address}
                            </CardText>
                            <Row>
                                <Col>
                                    <div on:click={() => edit(provider)}>
                                        ✏️
                                    </div>
                                </Col>
                                <Col>
                                    <div on:click={() => remove(provider)}>🗑️</div>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            {/each}
        </Row>
    {:catch error}
        <p>An error occurred!</p>
        {JSON.stringify(error)}
    {/await}

    <Modal {toggle} isOpen={open}>
        <ModalHeader>Edit provider</ModalHeader>
        <ModalBody>
            <form on:submit|preventDefault={update}>
                <FormGroup floating label="Name">
                    <Input
                        placeholder="Enter a value"
                        bind:value={edit_form.name}
                    />
                </FormGroup>

                <FormGroup floating label="Address">
                    <Input
                        placeholder="Enter a value"
                        type="text"
                        bind:value={edit_form.address}
                    />
                </FormGroup>

                <Button type="submit">OK</Button>
                <Button on:click={(e)=>{
                    e.preventDefault();
                    toggle()
                }}>Cancel</Button>
            </form>
        </ModalBody>
    </Modal>
</div>
