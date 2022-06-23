
const base_url = import.meta.env.VITE_BASE_URL;

export async function fn(resource) {

    const res = await fetch(`${base_url}api/${resource}`);

    return  res;

}

async function create(params) {
    
}

async function read(resource) {
    
}

async function update(params) {
    
}

async function remove(params) {
    
}