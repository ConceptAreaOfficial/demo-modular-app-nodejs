import userRepository from "./UserRepository";

function AddUser(payload: IAddUserPayload | null) {
    if(payload){
        return userRepository.addUser(payload);
    } else {
        return {}
    }
}

function GetUserByID(payload: IGetUserByIDPayload | null) {
    return userRepository.getUserByID(payload);
}

export {
    AddUser,
    GetUserByID
}
