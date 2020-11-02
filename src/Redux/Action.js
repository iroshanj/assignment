export const replace = (id) => {
    return {
        type: 'CHANGE_CATEGORY',
        id: id
    }

}

export const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        id: id
    }

}

export const addQuantity = (id) => {
    return {
        type: 'ADD_QUANTITY',
        id: id
    }
}

export const removeProduct = (id) => {
    return {
        type: 'REMOVE_PRODUCT',
        id: id
    }
}

export const removeQuantity = (id) => {
    return {
        type: 'REMOVE_QUANTITY',
        id: id
    }
}

export const clearCart = () => {
    return {
        type: 'CLEAR_CART',
         
    }
}


