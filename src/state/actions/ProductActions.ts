import {ProductActionTypes} from "../action-types/ProductActionTypes";

interface Product {
    id: number,
    name: string,
    price: number
}

interface AddProductAction {
    type: ProductActionTypes.ADD_PRODUCT
    payload: Product
}

export type Action = AddProductAction
