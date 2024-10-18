import { useState } from 'react';
import{Box,Menu,MenuItem, Typography,styled} from '@mui/material';


const Component = styled(Menu)`
    margin-top: 5px;
`;
const Change = styled(Typography)`
    font-size: 14px;
    margin-left: 20px
`

const Pincode = ({pincode, setPincode }) =>{

const [open, setOpen] = useState(false);

const handleClick = (event)=>{
    setOpen(event.currentTarget)
}

const handleClose = () =>{
    setOpen(false);
}
const change =()=>{
    setPincode('');
}

    return(
        <>
            <Box onClick={handleClick}><Typography style={{ marginTop: 2 , cursor: 'pointer'}}>{pincode}</Typography></Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { handleClose(); change(); }}>
                    <Change>Change </Change>
                </MenuItem>
            </Component>
        </>
    )    
}

export default Pincode;
