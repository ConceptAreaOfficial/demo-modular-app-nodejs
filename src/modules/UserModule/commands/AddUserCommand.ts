import UserModule from "../UserClass";
import { AddUser } from "../UserService";

class AddUserCommand extends UserModule implements ICommand<IAddUserPayload>{
    type = "AddUser";
    handler = AddUser;
}

export default AddUserCommand;