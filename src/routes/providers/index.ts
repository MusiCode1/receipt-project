import type { RequestHandlerOutput, RequestHandler } from "@sveltejs/kit";
import truck_img from '$lib/img/truck-svgrepo-com.svg';
import { save_img } from "$lib/save-file";
import { prisma_client } from "$lib/db";

const provider = prisma_client.provider;


const redirect: RequestHandlerOutput = {
    status: 303,
    headers: {
        location: '/providers'
    }
};

export const get: RequestHandler = async () => {

    return {
        body: {
            providers: await provider.findMany()
        }
    }
};

export const post: RequestHandler = async ({ request }) => {

    const form = await request.formData();

    const id = Number(form.get("id"));

    await provider.update({
        where: {
            id: id
        },
        data: {
            name: String(form.get("name")),
            address: String(form.get("address"))
        }
    })

    return redirect;
};

export const del: RequestHandler = async ({ request }) => {

    const form = await request.formData();

    await provider.delete({

        where: {
            id: Number(form.get("id"))
        }
    });

    return redirect;
};

export const put: RequestHandler = async ({ request }) => {

    const form = await request.formData();

    const file = form.get("file") as File;

    let img_name = "";

    if (file) {
        const uuid = crypto.randomUUID();
        const ext = file.name.split(".").pop();
        img_name = `${uuid}.${ext}`;

        await save_img(file, img_name);
    }

    const data = {
        name: String(form.get("name")),
        address: String(form.get("address")),
        avatar: img_name
    };

    await provider.create({
        data
    });

    return redirect;
};