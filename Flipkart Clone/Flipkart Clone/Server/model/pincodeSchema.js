import mongoose from "mongoose";

const pinCodeSchema=new mongoose.Schema({
    Pincode:
    {
        type:String,
        required: true,
        trim: true,
        max: 6
       
    }
});

const PinCode = mongoose.model('PinCode', pinCodeSchema);

export default PinCode;