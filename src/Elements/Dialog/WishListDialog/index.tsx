
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {connect} from 'react-redux'

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const WishListDialog=(props)=> {
    const {setOpen, setWishListState, wishListProduct, listType, cartProducts, setCartListState}=props
    const wishList:typeof listType="WishList"
    const handleClose=()=>{
        if(listType==="WishList"){
            setWishListState(false)
        }
        else if(listType==="CartList"){
            setCartListState(false)
        }
        else {
            return;
        }
    }
  return (
      listType===wishList?(
    <div>
      <Dialog open={setOpen}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {wishListProduct.length===0?"No Products in WishList":"Products in the WishList"}
          </DialogContentText>
          <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <nav aria-label="main mailbox folders">
                {wishListProduct.map((element)=> {
                    return (
                        <List key={element.id}>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText primary={element['brandName']} secondary={
                                <React.Fragment>
                                    <Typography>
                                        {element['brandName']}
                                        {element['name']}
                                        <br/>
                                        <span style={{fontWeight: 'bold'}}>{element['price'].currency}{" "}{element['price'].current.value}</span>
                                    </Typography>
                                </React.Fragment>
                            } />
                          </ListItemButton>
                        </ListItem>
                        </List>
                    )
                        })}
            </nav>
        </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>handleClose()}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>):(<div>
        <Dialog open={setOpen}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {cartProducts.length===0?"No Products in WishList":"Products in the WishList"}
            </DialogContentText>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <nav aria-label="main mailbox folders">
                  {cartProducts.map((element)=> {
                      return (
                          <List>
                          <ListItem disablePadding>
                            <ListItemButton>
                              <ListItemText primary={element['brandName']} secondary={
                                  <React.Fragment>
                                      <Typography>
                                          {element['brandName']}
                                          {element['name']}
                                          <br/>
                                          <span style={{fontWeight: 'bold'}}>{element['price'].currency}{" "}{element['price'].current.value}</span>
                                      </Typography>
                                  </React.Fragment>
                              } />
                            </ListItemButton>
                          </ListItem>
                          </List>
                      )
                  })}
              </nav>
          </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>handleClose()}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>)
  );
}

const mapStateToProps=(state)=> ({
    cartDialog: state.cartDialog,
    wishListProduct: state.wishListProduct,
    cartProducts: state.cartProducts
    
})

export default connect(mapStateToProps, null)(WishListDialog);