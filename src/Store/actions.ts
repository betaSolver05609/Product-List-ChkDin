import {ADD_TO_CART, ADD_PRODUCT, SET_PRODUCTS, ADD_TO_WISHLIST, OPEN_CART_DIALOG, DELETE_PRODUCT, UPDATE_PRODUCT_LIST, UPDATE_PRODUCT_LIST_ON_RATING, UPDATE_PRODUCT_LIST_ON_PRICE, EDIT_PRODUCT} from './actionTypes';

export const addToCart=(product)=> {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const updateProductListOnRating=(ratingValue)=>{
    return {
        type: UPDATE_PRODUCT_LIST_ON_RATING,
        payload: ratingValue
    }
}

export const updateProductListOnPrice=(minPrice, maxPrice)=> {
    return {
        type: UPDATE_PRODUCT_LIST_ON_PRICE,
        payload: {minPrice: minPrice, maxPrice: maxPrice}
    }
}
export const updateProductList=(searchValue)=> {
    return {
        type: UPDATE_PRODUCT_LIST,
        payload: searchValue
    }
}

export const editProduct=(productId, productDetails) => {
    return {
        type: EDIT_PRODUCT,
        payload: {
            productId: productId,
            productDetails: productDetails
        }
    }
}
export const addToWishList=(product)=> {
    return {
        type: ADD_TO_WISHLIST,
        payload: product
    }
}

export const openCartDialog=(state, productId)=> {
    return {
        type: OPEN_CART_DIALOG,
        payload: {state: state, productId: productId}
    }
}

export const deleteProduct=(product)=> {
    return {
        type: DELETE_PRODUCT,
        payload: product
    }
}

export const addProduct=(productId, productDetails) => {
    return {
        type: ADD_PRODUCT,
        payload: {
            productId: productId,
            productDetails: productDetails
        }
    }
}

export const setProducts=(productList)=> {
    return {
        type: SET_PRODUCTS,
        payload: productList
    }
}