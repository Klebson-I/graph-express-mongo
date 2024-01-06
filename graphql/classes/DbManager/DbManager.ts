import mongoose, { Mongoose } from "mongoose";
import { DbManager } from "./types";

export class DbManagerImplementation implements DbManager {
    dbInterface: Mongoose | null = null;
    private static instance: DbManagerImplementation | null = null;

    constructor(mongo: Mongoose) {
        if (!DbManagerImplementation.instance) {
            this.dbInterface = mongo;
            DbManagerImplementation.instance = this;
            return this;
        }
        return DbManagerImplementation.instance;
    }

    async connectToMongo() {
        this.dbInterface = await mongoose.connect(`${process.env.MONGODB_CONNECTION}`);
    }
}