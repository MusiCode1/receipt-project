import type { RequestHandlerOutput, RequestHandler } from "@sveltejs/kit";
import { prisma_client } from "$lib/db";
import { save_img } from "$lib/save-file";
import type { Provider } from '$lib/types';

const provider = prisma_client.provider;

const redirect: RequestHandlerOutput = {
    status: 303,
    headers: {
        location: '/providers'
    }
};

export const get: RequestHandler = async ({ params }) => {

    const id = Number(params.id);

    return {
        body: {
            provider: await provider.findUnique({
                where: {
                    id
                }
            })
        }
    }
};

export const post: RequestHandler = async ({ request }) => {

    const form = await request.formData();

    const id = Number(form.get("id"));

    const file: File | null = form.get("file") as File || null;

    let img_name = "";

    if (file) {
        const uuid = crypto.randomUUID();
        const ext = file.name.split(".").pop();
        img_name = `${uuid}.${ext}`;

        await save_img(file, img_name);
    }

    const data: Provider = {
        id,
        name: String(form.get("name")),
        address: String(form.get("address"))
    };

    if (file) {
        data.avatar = img_name;
    }

    await provider.update({
        where: {
            id: id
        },
        data
    });

    return redirect;
};