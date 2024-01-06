import { Mongoose } from "mongoose";

export interface DbManager {
    dbInterface: Mongoose | null;
}