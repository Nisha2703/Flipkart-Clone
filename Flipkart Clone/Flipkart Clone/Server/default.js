
import { products} from './constants/data.js';
import Product from './model/product.schema.js';
import {pincodes} from './constants/pinData.js';
import PinCode from './model/pincodeSchema.js';


export const DefaultData =async()=>{
    try{
        await Product.deleteMany({});
        await Product.insertMany(products);        
        console.log("Data imported");
    }
    catch(err){
        console.log('Error while inserting default data', err);
    }
    
}

export const PincodeData = async() =>{
    try{
        await PinCode.deleteMany({});
        await PinCode.insertMany(pincodes);
        console.log("Pincodes data import")
    }
    catch(err){
        console.log("Error while inserting Pincode data", err)
    }
}




