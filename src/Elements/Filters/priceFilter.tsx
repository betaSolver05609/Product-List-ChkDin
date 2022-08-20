import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {updateProductListOnPrice} from '../../Store/actions';
import {connect} from 'react-redux';

const PriceFilter=(props)=>{
  
  const {updateProductListOnPrice}=props;
  const [minPrice, setMinPrice]=React.useState('25')
  const [maxPrice, setMaxPrice]=React.useState('25')

  const handleMinPriceChange = (event: SelectChangeEvent) => {
    setMinPrice(event.target.value as string);
    updateProductListOnPrice(event.target.value as string, maxPrice)
  };

  const handleMaxPriceChange = (event: SelectChangeEvent) => {
    setMaxPrice(event.target.value as string);
    updateProductListOnPrice(minPrice, event.target.value as string)
  };
  const priceArray=[25,50,75,100,150,200]
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Min</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={minPrice}
          label="Age"
          onChange={handleMinPriceChange}
        >
            {priceArray.map((rating)=>(
                <MenuItem value={rating} key={rating}>{rating}</MenuItem>
            ))}
        </Select>
        </FormControl>
        <FormControl>
        <InputLabel id="demo-simple-select-label">Max</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={maxPrice}
          label="Age"
          onChange={handleMaxPriceChange}
        >
            {priceArray.map((rating)=>(
                <MenuItem value={rating} key={rating}>{rating}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}

const mapStateToProps=(state)=>({
    productList: state.productList
})

const mapDispatchToProps=(dispatch)=>({
    updateProductListOnPrice: (minPrice, maxPrice)=>dispatch(updateProductListOnPrice(minPrice, maxPrice))
})

export default connect(mapStateToProps, mapDispatchToProps)(PriceFilter);