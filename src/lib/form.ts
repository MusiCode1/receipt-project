import { invalidate } from '$app/navigation';

export const enhance = (form: HTMLFormElement) => {

    async function handleSubmit(event: Event) {

        event.preventDefault();

        const response = await fetch(form.action, {
			method: form.method,
			headers: { accept: 'application/json' },
			body: new FormData(form)
		});

        if (!response.ok) {
			console.error(await response.text());
		}

        const url = new URL(form.action);
        url.search = '';
		url.hash = '';
		invalidate(url.href);

    }

    form.addEventListener('submit', handleSubmit);

    return {

        destroy() {

            form.removeEventListener('submit', handleSubmit);
        }
    }

}