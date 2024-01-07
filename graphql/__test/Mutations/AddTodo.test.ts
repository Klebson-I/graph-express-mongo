import { TodoResolver } from "../../resolvers/todo.resolver";

const mockInsertTodo = jest.fn().mockResolvedValue({
    _id: 'mockedId',
});

jest.mock('../../classes/DbManager/TodoDbManager', () => {
    return {
        TodoDbManager: jest.fn().mockImplementation(() => ({
            insertTodo: mockInsertTodo
        }))
    };
});



const {
    Mutation: {
        AddTodo,
    }
} = TodoResolver;


describe('Test AddTodo mutation', () => {
    it('Should invoke insertTodo on Db class', async () => {
        const userInput = {completed: true, id: 1, title: '', userId: 12};
        await AddTodo(null, {userInput});
        expect(mockInsertTodo).toHaveBeenCalledWith(userInput);
    });
});