import ProductModule from "../ProductClass";
import { GetProducts } from "../ProductService";

class GetAllProductsQuery extends ProductModule implements ICommand<IGetAllProductsPayload>{
    type = "GetAllProducts";
    handler = GetProducts;
}

export default GetAllProductsQuery;