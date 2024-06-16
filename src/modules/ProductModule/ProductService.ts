import mediator from "../../core/mediator";
import GetUserByIDQuery from "../UserModule/queries/GetUserByIDQuery";
import productRepository from "./ProductRepository";


function AddProduct(payload: IAddProductPayload | null){
    if(payload){
        return productRepository.addProduct(payload);
    }
    return {}
}

function GetProducts(payload: IGetAllProductsPayload | null) {
    return productRepository.getAllProducts();
}

async function GetProductsForTheUser(payload: IGetProductsForTheUserPayload | null){
    if(!payload) {
        return []
    }
    const userId: number = payload.userId;
    const getUserByIDQuery = new GetUserByIDQuery();
    const user = await mediator.send(getUserByIDQuery, {userId});
    const userCosts = user.income * 0.1;
    return productRepository.getProductsForTheUser(payload, userCosts);
}

export {
    AddProduct,
    GetProducts,
    GetProductsForTheUser
}
