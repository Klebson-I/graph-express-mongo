import axios from "axios";
import { GetAllUsersDto, GetUserDto, User, UserHandler } from "./types";
import { USER_API_URL } from "./constants";

export class UserHandlerImplementation implements UserHandler {
    readonly url = USER_API_URL;
    constructor() {}

    async getUser(id: string): Promise<User> {
        const {data: user} = await axios({
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
            },
            url: `${this.url}/${id}`,
        }) as GetUserDto;
        return user;
    }

    async getAllUsers(): Promise<User[]> {
        const {data: user} = await axios({
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
            },
            url: this.url,
        }) as GetAllUsersDto;
        return user;
    }
}