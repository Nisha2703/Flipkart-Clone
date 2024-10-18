
import axios from 'axios';

export const authenticateLogin = async (data) => {
    try {
        return await axios.post('http://localhost:8000/login', data)
      } catch (error) {
        console.log('Error while calling login API:', error);
        return error.response;
      }
    };

export const authenticatesignUp  = async (data) => {
    try {
        return await axios.post('http://localhost:8000/signup', data)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}

export const authenticPinCode= async(pinData) =>{
        
    try {
        
        return await axios.post(`http://localhost:8000/product/product1/pincode`, pinData)
    } catch (error) {
        if (error.response) {
            return error.response;
        } else {
            throw new Error('Network or server error');
        }
    }
}



