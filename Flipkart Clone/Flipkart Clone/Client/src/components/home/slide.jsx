import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TimerIcon  from '@mui/icons-material/Timer';

import {Link} from 'react-router-dom';
import Countdown from 'react-countdown';

import{ Box, Typography,Button,Divider,  styled} from '@mui/material';

const responsive ={
    desktop: {
        breakpoint: { max : 3000, min: 1024},
        items: 5
    },
    tablet: {
        breakpoint: { max : 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: { max : 464, min: 0},
        items: 1
    }
}

const Component = styled(Box)`
    margin-top: 1%;
    background: #ffffff;
    
`
const Deal = styled(Box)`
    padding: 15px 20px;
    display: flex;
    color: #FFFFFF;
    background: #2874f0;
    align-items: center;
    height: 20px

`
const Timer = styled(Box)`
    display: flex;
    color: #FFFFFF;
    margin-left:1%;
    align-items: center
`
const DealText = styled(Typography)`
    font-weight:600;
    line-height:32px;
    margin-left:2%;
    font-size:22px

`
const ViewButton = styled(Button)({
    textTransform: 'none',
    display:'flex',
    marginLeft: 'auto',
    alignItems: 'center',
    
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 20%)',
    color: '#2874f0',
    background: '#FFFFFF',
    '&:hover': {
        color: '#FFFFFF',
        textTransform : 'uppercase',
        background: '#2874f0'
    }   
})

const Image = styled('img')({
    width: 'auto',
    height: 150
})

const Text = styled(Typography)`
    font-size:14px;
    margin-top:5px;
`

const Slide = ({products, title, timer}) =>{

    const renderer=({hours,minutes,seconds}) =>{
        return <Box variant = 'span'>{hours} : {minutes} : {seconds} Left</Box>
    }
    return(
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                    timer&&
                        <Timer>
                            <TimerIcon />
                            <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
                         </Timer>
                }
                <ViewButton variant ="contained" >View All</ViewButton>
            </Deal>
             <Divider style ={{ height: 1}}/> 
            <Carousel 
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            keyBoardControl={true}
            centerMode={true}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px">
                {
                   products.map(product =>(
                        <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>

                            <Box textAlign='center' style={{padding: '25px 15px'}}>

                            <Image src={product.url.shortUrl} />

                            <Text style={{color: '#212121', fontWeight: 600}}>{product.title.shortTitle}</Text>
                            <Text style={{color: 'green'}}>{product.discount}</Text>
                            <Text style={{color: '#666666'}}>{product.tagline}</Text>
                            </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Component>
    )
}

export default Slide;