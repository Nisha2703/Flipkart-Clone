import mongoose from "mongoose";

export const Connection =async(username, password) =>{
  const URL = `mongodb://${username}:${password}@ecommerece-web-shard-00-00.b1abe.mongodb.net:27017,ecommerece-web-shard-00-01.b1abe.mongodb.net:27017,ecommerece-web-shard-00-02.b1abe.mongodb.net:27017/?ssl=true&replicaSet=atlas-c1ixif-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecommerece-web`;
    try{
        await mongoose.connect(URL)
        console.log('Database connected successfully')
    }catch(error){
        console.log('Error while connecting with database' , error.message)
    }
}

export default Connection;