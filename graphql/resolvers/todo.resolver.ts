import { TodoHandlerImplementation } from "../classes/TodoHandler/TodoHandler"

export const TodoResolver = {
    Query: {
        async todos() {
            const TodoHandler = new TodoHandlerImplementation();
            const todos = await TodoHandler.getAllTodos();
            return todos;
        },
        async todo(_: any, { id }: {id: string}) {
            const TodoHandler = new TodoHandlerImplementation();
            const todo = await TodoHandler.getTodo(id);
            return todo;
        },
    },
    Mutation: {},
};