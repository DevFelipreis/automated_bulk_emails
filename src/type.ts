import { Request } from "express";

declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
};


export type Mailing = {
    id: number | string,
    nome: string,
    email: string,
};
