import mongoose, { Mongoose } from "mongoose";
import { DbManager } from "./types";

export class DbManagerImplementation implements DbManager {
    private _dbInterface: Mongoose | null = null;
    private static instance: DbManagerImplementation | null = null;

    constructor(mongo?: Mongoose) {
        if (!DbManagerImplementation.instance) {
            if (!mongo) {
                return;
            }
            this._dbInterface = mongo;
            DbManagerImplementation.instance = this;
            return this;
        }
        return DbManagerImplementation.instance;
    }

    async connectToMongo() {
        this._dbInterface = await mongoose.connect(`${process.env.MONGODB_CONNECTION}`);
    }

    isConnected() {
        return !!this.dbInterface;
    }

    get dbInterface() {
        return this._dbInterface;
    }
}