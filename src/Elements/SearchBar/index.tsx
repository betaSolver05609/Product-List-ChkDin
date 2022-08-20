import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {connect} from 'react-redux';
import {updateProductList} from '../../Store/actions';
const SearchBar=(props)=>{
    const {updateProductList}=props
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Enter Product Name or Category" id="fullWidth" variant="filled" onChange={(e)=>updateProductList(e.target.value)}/>
    </Box>
  );
}

const mapStateToProps=(state)=> ({
    productList: state.productList
})

const mapDispatchToProps=(dispatch)=> ({
    updateProductList: (searchValue)=>dispatch(updateProductList(searchValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);