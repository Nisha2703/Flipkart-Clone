import express from 'express';
import { userLogIn, userSignUp,  } from '../controller/user-controller.js';
import {getProducts, getProductbyId} from '../controller/product-controller.js';
import { getPincode } from '../controller/pinCode-controller.js';

const router = express.Router();

//login & signup
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductbyId)

router.post('/product/product1/pincode',getPincode);
export default router;