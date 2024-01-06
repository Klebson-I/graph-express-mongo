export interface User {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
};

export interface UserHandler {
    readonly url: string;
    getUser(id: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
}

export interface GetUserDto {
    data: User,
};

export interface GetAllUsersDto {
    data: User[],
};