
import Product from "../model/product.schema.js";

export const getProducts = async(request, response) =>{
   try{
    const products= await Product.find({});
    response.status(200).json(products);
   }
   catch(err){
    response.status(500).json({message: err.message});
   }
}

export const getProductbyId= async(request,response) =>{
   try{
       const product = await Product.findOne({ 'id': request.params.id });
        response.json(product);
        
    }
   catch(err){
      response.status(500).json({message:err.message});
   }
}