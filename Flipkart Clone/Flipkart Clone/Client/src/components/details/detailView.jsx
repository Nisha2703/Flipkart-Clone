import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productaction';
import ActionItem from './actionItem';
import ProductDetail from './ProductDetail';

import {Box,Grid, styled} from '@mui/material'


const Component = styled(Box)`
   
    margin-top: 8%;
    margin-left: 5%;
    display: flex;
    flex: 1;
`

const Container = styled(Grid)`
    background: #ffffff;
`

const RightContainer = styled(Grid)(({
    alignItems: 'center',
    padding:' 0px 0px 0px 5%',
   
}))
    

const DetailView = () =>{

    const dispatch=useDispatch();
    const{id}= useParams();

   const{loading, product} = useSelector(state => state.getProductDetails)

    useEffect(() => {
        if(product && id !==product.id)
        dispatch(getProductDetails(id));
    },[dispatch, id, product, loading])

    return(
        <Component>
            {
            product && Object.keys(product).length &&
                <Container container>
                    <Box item lg={2} md={2} sm={8} xs={12}>
                        <ActionItem product ={product}/>
                    </Box>
                    <RightContainer item lg={7} md={7} sm={8} xs={12}>
                       <ProductDetail product= {product} />
                    </RightContainer>
                </Container>
            }
        </Component>
    )

}

export default DetailView;