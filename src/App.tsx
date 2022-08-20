import React, {useEffect} from 'react';
import './App.css';
import NavBar from './Elements/NavBar';
import {getProductDetails} from './Services/ProductDetailsV1';
import {setProducts} from './Store/actions';
import { connect } from 'react-redux';
import HomePage from './pages/HomePage';

function App(props) {
    const {setProducts}=props
    useEffect(()=> {
        getProductDetails().then((productDetails)=>{
            const productList=productDetails?.data.products.map((elem)=>{
                elem['category']=elem.brandName;
                elem['rating']=Math.floor(Math.random() * 5) + 1
                return elem;
            })
            console.log(productList)
            setProducts(productList);
            localStorage.setItem('productList', JSON.stringify(productDetails?.data.products))
            console.log(productDetails)
        });
    }, [])
  return (
    <div className="container">
        <NavBar/>
        <HomePage/>
    </div>
  );
}

const mapStateToProps=(state)=> ({
    productList: state.productList
})

const mapDispatchToProps=(dispatch)=>({
    setProducts: (productList)=>dispatch(setProducts(productList))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
