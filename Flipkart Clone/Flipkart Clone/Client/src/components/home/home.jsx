// because both are parents node and only one parent node is allowed, to clear it we use one parent tag and make others its child node
//import { Fragment } from 'react';
import { useEffect } from 'react';

import Navbar from './navbar';
import Banner from './banner';
import {Box, styled} from'@mui/material';

import {getProducts} from '../../redux/actions/productaction.js';
import {useDispatch, useSelector} from 'react-redux';
import Slide from './slide.jsx';
import MidSlide from './midSlide';
import MidBanner from './midbanner.jsx';

const Container= styled(Box)`
     background: #F2F2F2;    
`

const Home = ()=>{

    const { products }=useSelector(state => state.Products);
    
    const dispatch = useDispatch();
     useEffect(() => {
        dispatch(getProducts())
    },[dispatch])
    return(
    <>

        <Container>
        <Navbar />
        
        
        <Banner />
        <MidSlide products ={products} title= 'Deal of the Day ' timer={true}/>
        <Slide products ={products} title = 'Trending Offers' timer={false}/>
        <MidBanner/>
        <Slide products ={products}title = 'Suggested For You' timer={false}/>
        <Slide products ={products} title = 'Bestsellers' timer={false}/>
        <Slide products ={products}title = 'Season top picks' timer={false}/>
       </Container>
    </>
    )
}

export default Home;