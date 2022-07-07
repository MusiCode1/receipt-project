import type { RequestHandler } from "@sveltejs/kit";
import { readFile } from "fs/promises";


export const get: RequestHandler = async ({ params }) => {

    const file = await readFile(`./files/${params.img}`);

    return {
        body: file
    }

}