import React from 'react';
import {openCartDialog} from '../../Store/actions';
import {connect} from 'react-redux';
import WishListDialog from '../Dialog/WishListDialog';
const NavBar=(props)=>{
    const {wishListProduct, cartProducts, openCartDialog}=props
    const [openWishListProduct, setOpenWishListProductState]=React.useState(false);
    const [openCartList, setOpenCartListState]=React.useState(false)

    const WishList:string="WishList"
    const CartList:string="CartList"

    const setWishListState=(state)=>{
        setOpenWishListProductState(state)
    }
    const setCartListState=(state)=> {
        setOpenCartListState(state)
    }
    return (
        <nav>
            <ul>
                <li onClick={()=>openCartDialog(true, 1)}>Add Product</li>
                <li onClick={()=>setCartListState(true)}>Cart({cartProducts.length})</li>
                <li onClick={()=>setWishListState(true)}>WishList({wishListProduct.length})</li>
            </ul>
            <WishListDialog setOpen={openWishListProduct} setWishListState={setWishListState} listType={WishList} />
            <WishListDialog setOpen={openCartList} setCartListState={setCartListState} listType={CartList} />
        </nav>
    )
}

const mapStateToProps=(state)=>({
    wishListProduct: state.wishListProduct,
    cartProducts: state.cartProducts
})

const mapDispatchToProps=(dispatch)=>({
    openCartDialog: (state)=>dispatch(openCartDialog(state,0))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);