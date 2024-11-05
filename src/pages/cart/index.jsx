import Header from '../../components/main-header/Header.js';
import Sidebar from '../../components/side-bar/Sidebar.js';
import CartSummary from '../../components/cart-summary/CartSummary.jsx';
import CartItemList from '../../components/cart-item-list/CartItemList.jsx';
import Grid2 from '@mui/material/Grid2';
import './styles.css';

function Cart() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
            <Grid2 container spacing={10}>
                <Grid2 item xs={10}>
                <CartItemList />
                </Grid2>
                <Grid2 item xs={2}>
                <CartSummary />
                </Grid2>
            </Grid2>
        </div>
      </div>
    </div>
  );
}

export default Cart;