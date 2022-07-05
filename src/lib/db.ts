
export type ProviderType = {
    id: number;
    name: string;
    address: string;
};

export class Provider {

    private providers: ProviderType[] = [];

    create(provider: ProviderType) {

        this.providers.push(provider);
    }

    create_blk(providers: ProviderType[]) {

        this.providers.push(...providers);
    }

    read() {

        return this.providers;
    }

    update(provider: ProviderType) {

        this.providers[provider.id] = provider;
    }

    delete(provider: ProviderType) {

        delete this.providers[provider.id];
    }

}

export const provider = new Provider();

provider.create_blk([
    {
        id: 0,
        name: 'Some provider',
        address: 'Address'
    },
    {
        id: 1,
        name: 'Some provider',
        address: 'Address'
    },
    {
        id: 2,
        name: 'Some provider',
        address: 'Address'
    },
    {
        id: 3,
        name: 'Some provider',
        address: 'Address'
    },
    {
        id: 4,
        name: 'Some provider',
        address: 'Address'
    },
    {
        id: 5,
        name: 'Some provider',
        address: 'Address'
    },
    {
        id: 6,
        name: 'Some provider',
        address: 'Address'
    },
    {
        id: 7,
        name: 'Some provider',
        address: 'Address'
    },
    {
        id: 8,
        name: 'Some provider',
        address: 'Address'
    }

]);