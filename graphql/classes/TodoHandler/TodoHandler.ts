import axios from "axios";
import { USER_API_URL } from "./constants";
import { GetAllTodosDto, GetTodoDto, Todo, TodoHandler } from "./types";

export class TodoHandlerImplementation implements TodoHandler {
    readonly url = USER_API_URL;
    constructor() {}

    async getTodo(id: string): Promise<Todo> {
        const {data: todo} = await axios.get(`${this.url}/${id}`) as GetTodoDto;
        return todo;
    }

    async getAllTodos(): Promise<Todo[]> {
        const {data: todos} = await axios.get(this.url) as GetAllTodosDto;
        return todos;
    }
}