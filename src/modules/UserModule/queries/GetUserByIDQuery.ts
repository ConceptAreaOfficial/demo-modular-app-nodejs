import UserModule from "../UserClass";
import { GetUserByID } from "../UserService";

class GetUserByIDQuery extends UserModule implements ICommand<IGetUserByIDPayload>{
    type = "GetUserByID";
    handler = GetUserByID;
}

export default GetUserByIDQuery;