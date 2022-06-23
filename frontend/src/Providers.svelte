<script>
    import { Card } from "sveltestrap";
    import {fn} from "./get_data";

    const res = (async()=>{
        const res = await fn("providers");

        return res.json();

    })();

</script>

<h1>Test</h1>

{#await res}
    <p>...waiting</p>
{:then data}
    <pre>
        {JSON.stringify(data)}
    </pre>
{:catch error}
    <p>An error occurred!</p>
    {JSON.stringify(error)}
{/await}
