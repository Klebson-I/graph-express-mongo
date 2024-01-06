export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
};

export interface TodoHandler {
    readonly url: string;
    getTodo(id: string): Promise<Todo>;
    getAllTodos(): Promise<Todo[]>;
}

export interface GetTodoDto {
    data: Todo,
};

export interface GetAllTodosDto {
    data: Todo[],
};