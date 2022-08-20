import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import {openCartDialog, editProduct, addProduct} from '../../../Store/actions'
import {connect} from 'react-redux';

const FormDialog=(props)=> {
        const {cartDialog, openCartDialog, productList, editProduct, addProduct}=props
        const productId=cartDialog===undefined?false:cartDialog.productId
        const state=cartDialog===undefined?false:cartDialog.state
  
        const [open, setOpen]=React.useState(false)

        const [imageURLRef, setImageUrl]=React.useState<string>('');
        const [brandName, setBrandName]=React.useState<string>('')
        const [name, setName]=React.useState<string>('')
        const [currency, setCurrency]=React.useState('')
        const [price, setPrice]=React.useState<string>('')

        const setImageURL=(event)=>{
            setImageUrl(event.target.value)
        }
        const setBrandNameRef=(event)=>{
            setBrandName(event.target.value)
        }

        const setNameRef=(event)=>{
            setName(event.target.value)
        }

        const setCurrencyRef=(event)=> {
            setCurrency(event.target.value)
        }

        const setPriceRef=(event)=> {
            setPrice(event.target.value)
        }

  const handleOpen=()=> {console.log(cartDialog.state)
      if(state===undefined){
          return;
      }
      if(cartDialog.state===false){
          setOpen(false)
          return;
      }
      setOpen(true)
      let associatedProduct=null
      console.log(productId)
      if(productId==0) {
        setImageUrl('')
        setName('')
        setBrandName('')
        setCurrency('')
        setPrice('')
      }
      else {
        associatedProduct=productList.find(element=>element.id===productId)
        console.log(associatedProduct)
        if(associatedProduct!==null && associatedProduct!==undefined){
            setImageUrl(associatedProduct['imageUrl'])
            setName(associatedProduct['name'])
            setBrandName(associatedProduct['brandName'])
            setCurrency(associatedProduct['price'].currency)
            setPrice(associatedProduct['price'].current.value)
        }
      }
  }
  const handleClose = () => {
    console.log("Handle CLose");
    setOpen(false)
    props.openCartDialog(false, 1)
};

    const handleSubmit=()=> {
        let productDetails= {
            productId: productId,
            name: name,
            brandName: brandName,
            imageUrl: imageURLRef,
            currency: currency,
            price: price
        }
        console.log(productId)
        if(productId===0){
            console.log(productId, "Inside if condition")
            addProduct(productId, productDetails)
        }
        else{
        editProduct(productId, productDetails)
        }
        setOpen(false)
        props.openCartDialog(false, 1)
    }

React.useEffect(()=>{
    console.log('use effect got called', cartDialog)
    if(props.cartDialog!==undefined){
        handleOpen();
    }
}, [state, productId])



  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>ADD/EDIT PRODUCT</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please Provide the following details to add or edit a product
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Image URL"
            type="email"
            fullWidth
            variant="standard"
            value={imageURLRef}
            onChange={setImageURL}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Brand Name"
            type="email"
            fullWidth
            variant="standard"
            value={brandName}
            onChange={setBrandNameRef}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="email"
            fullWidth
            variant="standard"
            value={name}
            onChange={setNameRef}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Currency"
            type="email"
            fullWidth
            variant="standard"
            value={currency}
            onChange={setCurrencyRef}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Price"
            type="email"
            fullWidth
            variant="standard"
            value={price}
            onChange={setPriceRef}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps=(state)=>({
    cartDialog: state.cartDialog,
    productList: state.productList
})

const mapDispatchToProps=(dispatch)=> ({
    openCartDialog: (state, productId)=>dispatch(openCartDialog(state, productId)),
    editProduct: (productId, productDetails)=>dispatch(editProduct(productId, productDetails)),
    addProduct: (productId, productDetails)=>dispatch(addProduct(productId, productDetails))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog);