import { TodoDbManager } from "../classes/DbManager/TodoDbManager";
import { TodoHandlerImplementation } from "../classes/TodoHandler/TodoHandler";
import { Todo } from '../classes/TodoHandler/types';

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
    Mutation: {
        async AddTodo(_: any, { userInput }: { userInput: Todo }) {
            try {
                const todoDb = new TodoDbManager();
                const insertResult = await todoDb.insertTodo(userInput);
                return insertResult;
            }
            catch (e) {
                console.log(e);
            }
        }
    },
};