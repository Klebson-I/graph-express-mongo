import { Model, Schema, Document, ObjectId, Mongoose } from "mongoose";
import { DbManagerImplementation } from "./DbManager";
import { Todo } from "../TodoHandler/types";
import { TodoDocument } from "./types";

export class TodoDbManager {
    dbInterface: Mongoose;
    collection: Model<TodoDocument> | null = null;
    constructor() {
        this.dbInterface = new DbManagerImplementation().dbInterface!;
        const todoSchema = new Schema<TodoDocument>({
            userId: Number,
            id: Number,
            title: String,
            completed: Boolean,
        });
        try {
            this.collection = this.dbInterface.model('Todo', todoSchema);
        }
        catch (e) {
            this.collection = this.dbInterface.model('Todo') as Model<TodoDocument>;
        }
    }
    async findTodo(id: string) {
        return this.collection?.findOne({ id });
    }

    async findAllTodos() {
        return this.collection?.find({});
    }

    async insertTodo(todo: Todo) {
        return this.collection?.create(todo);
    }

    async deleteTodo(id: string) {
        return this.collection?.deleteOne({ id });
    }

    async deleteAllTodos() {
        return this.collection?.deleteMany({});
    }

    async updateTodo(todo: Todo) {
        return this.collection?.updateOne({ id: todo.id}, { $set: {
            title: todo.title
        } });
    }
}