import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {updateProductListOnRating} from '../../Store/actions';
import {connect} from 'react-redux';

const RatingFilter=(props)=> {
    const {updateProductListOnRating}=props;
    const [selectedRating, setSelectedRating]=React.useState('1');
  const handleChange = (event: SelectChangeEvent) => {
    updateProductListOnRating(event.target.value as string)
    setSelectedRating(event.target.value as string)
  };
  const maxRating=5;
  const ratingArray=Array.from({length: maxRating}, (_, i) => i + 1)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Rating</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedRating}
          label="Age"
          onChange={handleChange}
        >
            <MenuItem value={0}>Clear</MenuItem>
         {ratingArray.map((rating)=>(
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
    updateProductListOnRating: (ratingValue)=>dispatch(updateProductListOnRating(ratingValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(RatingFilter);