import ProductModule from "../ProductClass";
import { GetProductsForTheUser } from "../ProductService";

class GetProductsForTheUserQuery extends ProductModule implements ICommand<IGetProductsForTheUserPayload>{
    type = "GetProductsForTheUser";
    handler = GetProductsForTheUser;
}

export default GetProductsForTheUserQuery;