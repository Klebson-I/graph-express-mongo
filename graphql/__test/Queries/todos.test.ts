import axios from 'axios';
import { TodoResolver } from '../../resolvers/todo.resolver';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const Todos = [
    {
        userId: 1,
        id: 1,
        title: '',
        completed: true,
    },
    {
        userId: 1,
        id: 2,
        title: 'kill a mockbird',
        completed: true,
    },
]

const { Query: { todo } } = TodoResolver;


describe('Test todo query', () => {
    it('Should return single todo', async() => {
        mockedAxios.get.mockResolvedValue({
            data: Todos[0],
        });
        const response = await todo(null, {id: '1'});
        expect(response).toBe(Todos[0]);
    })
})