import type { RequestHandlerOutput } from "@sveltejs/kit";
import type { RequestHandler } from "./__types/providers";
import { provider } from "$lib/db";

const redirect: RequestHandlerOutput = {
    status: 303,
    headers: {
        location: '/providers'
    }
};

export const get: RequestHandler = async () => {

    return {
        body: {
            providers: provider.read()
        }
    }
};

export const post: RequestHandler = async ({ request }) => {

    const form = await request.formData();

    provider.update({
        id: Number(form.get("id")),
        name: String(form.get("name")),
        address: String(form.get("address"))
    });

    return redirect;
};

export const del: RequestHandler = async ({ request }) => {

    const form = await request.formData();


    provider.delete({
        id: Number(form.get("id")),
        name: String(form.get("name")),
        address: String(form.get("address"))
    });

    return redirect;
};

export const put: RequestHandler = async ({ request }) => {

    const form = await request.formData();

    provider.create({
        id: Number(form.get("id")),
        name: String(form.get("name")),
        address: String(form.get("address"))
    });

    return redirect;
};