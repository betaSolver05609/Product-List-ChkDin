import {SET_PRODUCTS, ADD_TO_WISHLIST, ADD_PRODUCT, OPEN_CART_DIALOG, DELETE_PRODUCT, ADD_TO_CART, UPDATE_PRODUCT_LIST, UPDATE_PRODUCT_LIST_ON_RATING, UPDATE_PRODUCT_LIST_ON_PRICE, EDIT_PRODUCT} from './actionTypes'
import { updateProductListOnPrice } from './actions'

interface AppInitialState {
    productList: any[],
    productListReadOnly: any[],
    wishListProduct: any[],
    cartDialog: boolean,
    cartProducts: any[]
}

export const initialState: AppInitialState= {
    productList: [],
    productListReadOnly: [],
    wishListProduct: [],
    cartDialog: false,
    cartProducts: []
}

export const reducer=(state=initialState, action:any)=> {
    console.log(action)
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                productList: action.payload,
                productListReadOnly: action.payload
            }
        case OPEN_CART_DIALOG:
            return {
                ...state,
                cartDialog: action.payload
            }
        case EDIT_PRODUCT: 
        console.log(action)
            let editedListReadOnly=state.productListReadOnly.map((product)=> {
                if(product.id===action.payload.productId) {
                    product['imageUrl']=action.payload.productDetails.imageUrl
                    product['name']=action.payload.productDetails.name
                    product['brandName']=action.payload.productDetails.brandName
                    product['price'].currency=action.payload.productDetails.currency
                    product['price'].current.value=action.payload.productDetails.price
                    return product
                }
                return product
            })
            let editedList=state.productList.map((product)=> {
                if(product.id===action.payload.productId) {
                    product['imageUrl']=action.payload.productDetails.imageUrl
                    product['name']=action.payload.productDetails.name
                    product['brandName']=action.payload.productDetails.brandName
                    product['price'].currency=action.payload.productDetails.currency
                    product['price'].current.value=action.payload.productDetails.price
                    return product
                }
                return product
            })
            return {
                ...state,
                productListReadOnly: editedListReadOnly,
                productList: editedList
            }
        case ADD_PRODUCT: {
            let product={
                id: Math.floor(Math.random()*100000000),
               imageUrl:action.payload.productDetails.imageUrl,
                   name:action.payload.productDetails.name,
                    brandName:action.payload.productDetails.brandName,
                    price: {
                        currency: action.payload.productDetails.currency,
                        current: {
                            value:action.payload.productDetails.price
                        }
                    }
            }
            console.log(product)
                return {
                    ...state,
                    productListReadOnly: [...state.productListReadOnly, product],
                    productList: [...state.productList, product]
                }
            }
        case UPDATE_PRODUCT_LIST: 
            const newProductList=state.productListReadOnly.filter((element)=> {
                return element.name.toLowerCase().includes(action.payload) || element.category.toLowerCase().includes(action.payload)
            })
            return {
                ...state,
                productList: newProductList
            }
        case UPDATE_PRODUCT_LIST_ON_RATING:
            let newList: any=[]    
            if(action.payload===0){
                newList=state.productListReadOnly
            }
            else{
            newList=state.productListReadOnly.filter((element)=> {
                return element.rating===action.payload
            })
        }
            return {
                ...state,
                productList: newList

            }
        case UPDATE_PRODUCT_LIST_ON_PRICE: {
            console.log(action.payload)
            const {minPrice, maxPrice}=action.payload
            let newList=state.productListReadOnly.filter((elem)=> {
                console.log(elem.price, minPrice, maxPrice, elem.price>minPrice && elem.price<maxPrice)
                return elem.price.current.value>minPrice && elem.price.current.value<maxPrice && minPrice<maxPrice
            })
            
            return {
                ...state,
                productList: newList
            }
        }
        case DELETE_PRODUCT: {
            const intiProductList=state.productList
            const newList=intiProductList.filter((product)=>{
                //console.log(action.payload.id, product.id)
                return product.id!==action.payload
            })
            localStorage.setItem('productList', JSON.stringify(newList));
            return {
                ...state,
                productList: newList
            }
        }
        case ADD_TO_CART: 
            return  {
                ...state,
                cartProducts: [...state.cartProducts, action.payload]
            }
        case ADD_TO_WISHLIST:
            return {
                ...state, 
                wishListProduct: [...state.wishListProduct, action.payload]
            }
        default:
            return state;
    }
}