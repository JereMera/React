import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/cardContext';
import { NotificationProvider } from './notification/notificationService';
import Menu from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/itemDetailerContainer'
import Cart from './components/Cart/cart'
import Checkout from './components/CheckOut/checkOut.js';



function App() {

  return (
    <div className="App">

      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Menu />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>

    </div >
  );
}

export default App;