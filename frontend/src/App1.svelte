<script>
  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
  import { Styles } from "sveltestrap";

  import { Button, Modal } from "sveltestrap";

  let isOpen = false;
  const toggle = () => (isOpen = !isOpen);
</script>

<main>
  <img src={logo} alt="Svelte Logo" />
  <h1>Hello world!</h1>

  <Counter />

  <Button color="primary" on:click={toggle}>Hello World!</Button>
  <Modal body {isOpen} {toggle} header="Hello World!">
    <p>There's a song that we're singing. Come on</p>
    <img
      src="https://i.ytimg.com/vi/NUJIRujygvY/hqdefault.jpg"
      alt="Come on Get Happy"
      class="img-fluid"
    />
  </Modal>

  <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p>
</main>

<Styles />

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
