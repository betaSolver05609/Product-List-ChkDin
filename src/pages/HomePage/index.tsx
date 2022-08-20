import React from 'react'
import {connect} from 'react-redux';
import {addToWishList, deleteProduct, openCartDialog, addToCart} from '../../Store/actions';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import SearchBar from '../../Elements/SearchBar'
import PriceFilter from '../../Elements/Filters/priceFilter';
import RatingFilter from '../../Elements/Filters/RatingFilter';
import FormDialog from '../../Elements/Dialog/AddEditProductDialog'
const HomePage=(props)=>{
    const {productList, addToWishList, deleteProduct, openCartDialog, addToCart}=props;
    console.log(productList)
    const listItems=productList.map((product)=> (
        <div className="card" key={product.id}>
            <div className="card_img">
                <img src={product.imageUrl} alt=""></img>
            </div>
            <div className="card_header">
                <br/>
                <h2>{product.brandName}</h2>
                <br/>
                <p>{product.name}</p>
                <br/>
                <p className="price"><span>{product.price.currency}{" "}{product.price.current.value}</span></p>
                <div className="cardIconButton">
                <IconButton aria-label="delete" onClick={()=>deleteProduct(product.id)}>
                    <DeleteIcon />
                </IconButton>

                <IconButton aria-label="delete" onClick={()=>openCartDialog(true, product.id)}>
                    <EditIcon/>
                </IconButton>
                </div>
                <div className="cardButton">
                <div className="btn" onClick={()=>addToCart(product)}>Add to Cart</div>
                <div className="btn" onClick={()=>addToWishList(product)}>Add to WishList</div>
                </div>
            </div>
        </div>
    ))
    return (
        <div>
        <div className="search_bar">
        <SearchBar />
        </div>
        <br/>
        <div className="filters">
        <PriceFilter/><RatingFilter/>
        </div>
    <div className="main_content">
        {listItems}
    </div>
    <FormDialog/>
    </div>
    )   
}

const mapStateToProps=(state)=> ({
    productList: state.productList
})

const mapDispatchToProps=(dispatch)=> ({
    addToWishList: (product)=>dispatch(addToWishList(product)),
    deleteProduct: (product)=>dispatch(deleteProduct(product)),
    addToCart: (product)=>dispatch(addToCart(product)),
    openCartDialog: (state, productId)=>dispatch(openCartDialog(state, productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);