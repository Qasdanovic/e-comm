export const ADD_TO_CART = "ADD_TO_CART"
export const DELETE_FROM_CART = "DELETE_FROM_CART"



export const add_to_cart = (productId) => {
    return {
        type : ADD_TO_CART,
        productId
    }
}
