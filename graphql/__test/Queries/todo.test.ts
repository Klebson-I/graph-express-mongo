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

const { Query: { todos } } = TodoResolver;


describe('Test todos query', () => {
    it('Should return array of todos', async() => {
        mockedAxios.get.mockResolvedValue({
            data: [
              ...Todos,
            ],
        });
        const response = await todos();
        expect(response).toEqual(Todos);
    })
})