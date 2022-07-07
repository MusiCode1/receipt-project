import { PrismaClient } from "@prisma/client";

export const prisma_client = new PrismaClient();


export type ProviderType = {
    id?: number;
    name?: string;
    address?: string;
};
