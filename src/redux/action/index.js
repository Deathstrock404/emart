// for adding the items to the cart
export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

// foe delete Item from cart
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}