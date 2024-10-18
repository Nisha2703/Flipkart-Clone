import React, { useState, useEffect } from 'react';

import Slide from './slide';
import { Box, styled}  from '@mui/material';


const Component = styled(Box)`
    display: flex;
`

const LeftComponent = styled(Box)({
    width: '83%',
   

})

const RightComponent = styled(Box)`
    background: #ffffff;
    padding: 5px;
    margin-top: 6px;
    margin-left:auto;
    text=align: center
`
const MidSlide =({ products, title, timer}) =>{
        const [isLargeScreen, setIsLargeScreen] = useState(false);
      
        useEffect(() => {
          const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024); 
          };
      
          window.addEventListener('resize', handleResize);
          handleResize();
      
          return () => window.removeEventListener('resize', handleResize);
        }, []);

    const addURL = 'https://rukminim2.flixcart.com/fk-p-flap/530/810/image/a9247a35b6e54c65.png?q=20';
    return(
        <Component>
        
            {
                isLargeScreen ? (
                    <>
                        <LeftComponent style={{width: '83%'}}>
                        <Slide
                        products ={products} 
                        title= {title}
                        timer={timer}/>
                        </LeftComponent>
                        <RightComponent>
                            <img src ={addURL} alt= 'ad' style= {{width: '100%', height: '100%'}} />
                        </RightComponent>
                    </>
                )
                :
                (
                <>
                  <LeftComponent style={{width: '100%'}}>
                    <Slide
                    products ={products} 
                    title= {title}
                     timer={timer}/>
                    </LeftComponent>
                <RightComponent display={false} />
                </>
                )
            }
        
        </Component>
    )
}

export default MidSlide;