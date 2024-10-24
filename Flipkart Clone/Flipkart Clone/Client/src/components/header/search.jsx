import { useState, useEffect } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import { InputBase, List, ListItem, Box, styled, Typography } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux'; 

import {getProducts } from '../../redux/actions/productaction';

import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const Search = () => {
    const [ text, setText ] = useState();
    const[open , setOpen]= useState(true)

    const { products }=useSelector(state => state.Products);
    
    const getText = (text) => {
      setText(text);
      setOpen(false);
      
    }

    const dispatch = useDispatch();
     useEffect(() => {
        dispatch(getProducts())
    },[dispatch])
   
  
    return (
      <SearchContainer >

            <InputSearchBase
              placeholder="Search for products, brands and more"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => getText(e.target.value)}
              value={text}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            {
              text && 
              <ListWrapper hidden={open}>
                {
                   products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <Link to={`product/${product.id}`} style={{textDecoration:'none'}}  onClick={() => setOpen(true)}>
                      <ListItem> {product.title.longTitle}</ListItem>
                    </Link>
                  
                   ))
                }  
              </ListWrapper>
            }
        </SearchContainer>
  
    )
}

export default Search;