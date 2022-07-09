import type { RequestHandler, RequestHandlerOutput } from "@sveltejs/kit";
import { readFile } from "fs/promises";
import { contentType } from "mime-types";


export const get: RequestHandler = async ({ params }) => {

    const file = await readFile(`./files/${params.img}`);
    const content_type = contentType(params.img);

    const response: RequestHandlerOutput = {
        body: file,
        headers:
            (content_type) ?
                {
                    "content-type": content_type
                } :
                {}
    };

    return response;

}