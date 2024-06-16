const users: IUser[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', income: 5000 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', income: 6000 },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', income: 2500 },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com', income: 5200 },
    { id: 5, name: 'Emily Davis', email: 'emily@example.com', income: 2800 },
    { id: 6, name: 'Michael Wilson', email: 'michael@example.com', income: 5800 },
    { id: 7, name: 'Sarah Taylor', email: 'sarah@example.com', income: 5300 },
    { id: 8, name: 'David Martinez', email: 'david@example.com', income: 3400 },
    { id: 9, name: 'Emma Anderson', email: 'emma@example.com', income: 11000 },
    { id: 10, name: 'James Thompson', email: 'james@example.com', income: 3700 }
];

class UserRepository {
    private users: IUser[];

    constructor(initialUsers: IUser[]){
        this.users = initialUsers;
    }

    addUser(payload: IAddUserPayload) {
        const newUser = {
            ...payload,
            id: users[users.length - 1].id + 1
        }
        users.push(newUser);
        return newUser
    }
    
    getUserByID(payload: IGetUserByIDPayload | null) {
        const user = users.find(user => user.id == payload?.userId);
        return user ? user : {};
    }
}

export default new UserRepository(users);