
const base_url = import.meta.env.VITE_BASE_URL;

export type Provider = {
    id: number,
    name: string,
    address: string
}

export class Providers {

    public list: Provider[] = [];

    async get() {

        let response = await fetch(`${base_url}/api/providers`);

        const list = await response.json();

        this.list = list;

        return this.list;
    }

    async update(provider: Provider) {

        await fetch(`${base_url}/api/providers/${provider.id}`, {
            method: "POST",
            body: JSON.stringify(provider),
            headers: {
                "Content-Type": "application/json"
            }
        });

        return this.get();
    }

    async remove(provider: Provider) {

        await fetch(`${base_url}/api/providers/${provider.id}`, {
            method: "DELETE"
        });

        return this.get();

    }



}



export async function create(params) {

}

export async function read(resource) {

}

export async function update(params) {

}

