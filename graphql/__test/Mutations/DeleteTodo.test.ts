import { TodoResolver } from "../../resolvers/todo.resolver";

const mockDeleteTodo = jest.fn().mockResolvedValue({
    _id: 'mockedId',
});

jest.mock('../../classes/DbManager/TodoDbManager', () => {
    return {
        TodoDbManager: jest.fn().mockImplementation(() => ({
            deleteTodo: mockDeleteTodo
        }))
    };
});



const {
    Mutation: {
        DeleteTodo,
    }
} = TodoResolver;


describe('Test Delete mutation', () => {
    it('Should invoke deleteTodo on Db class', async () => {
        const userInput = {id: 1};
        await DeleteTodo(null, {userInput});
        expect(mockDeleteTodo).toHaveBeenCalledWith(String(userInput.id));
    });
});