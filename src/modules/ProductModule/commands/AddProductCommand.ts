import ProductModule from "../ProductClass";
import { AddProduct } from "../ProductService";

class AddProductCommand extends ProductModule implements ICommand<IAddProductPayload> {
    type = "AddProduct";
    handler = AddProduct
}

export default AddProductCommand;