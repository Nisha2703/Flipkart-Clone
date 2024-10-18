import PinCode from "../model/pincodeSchema.js"


export const getPincode = async (request, response) => {
    try {
        const pincode = await PinCode.findOne({ Pincode: request.body.Pincode });
        if (pincode) {
            return response.status(200).json({ message: 'Pincode Available' });
        } else {
            return response.status(404).json({ message: 'Pincode Not Found' });
        }
    } catch (error) {
        return response.status(500).json({ message: 'Error occurred', error: error.message });
    }
};
