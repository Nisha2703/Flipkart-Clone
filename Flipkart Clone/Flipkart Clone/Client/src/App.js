import DetailView from './components/details/detailView';
import Header from './components/header/header';
import Home from './components/home/home';
import ContextProvider from './context/dataprovider';
import Cart from './components/cart/cart.jsx'
import CheckOut from './components/checkout/checkout.jsx';


import {Box} from'@mui/material';

import { BrowserRouter,Routes, Route} from 'react-router-dom';
function App() {
  return (
  <ContextProvider>
    <BrowserRouter>
   
    <Header />
      <Box style={{ marginTop: 70}}>
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/product/:id' element ={ <DetailView />}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<CheckOut/>} />
      </Routes>
      </Box>
    </BrowserRouter>
  </ContextProvider>
  );
}

export default App;
