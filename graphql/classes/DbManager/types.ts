import { Mongoose } from "mongoose";

export interface DbManager {
    dbInterface: Mongoose | null;
}

export interface TodoDocument extends Document {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}