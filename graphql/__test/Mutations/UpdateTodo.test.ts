import { TodoResolver } from "../../resolvers/todo.resolver";

const mockUpdateTodo = jest.fn().mockResolvedValue({
    _id: 'mockedId',
});

jest.mock('../../classes/DbManager/TodoDbManager', () => {
    return {
        TodoDbManager: jest.fn().mockImplementation(() => ({
            updateTodo: mockUpdateTodo
        }))
    };
});



const {
    Mutation: {
        UpdateTodo,
    }
} = TodoResolver;


describe('Test UpdateTodo mutation', () => {
    it('Should invoke updateTodo on Db class', async () => {
        const userInput = {completed: true, id: 1, title: '', userId: 12};
        await UpdateTodo(null, {userInput});
        expect(mockUpdateTodo).toHaveBeenCalledWith(userInput);
    });
});