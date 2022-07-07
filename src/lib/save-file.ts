import { writeFile } from "fs/promises";

export const save_img = async (file: File, name: string) => {

    await writeFile(`./files/${name}`, file.stream());
}