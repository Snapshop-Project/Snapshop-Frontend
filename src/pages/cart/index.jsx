// import logo from './logo.svg';
import Header from '../../components/main-header/Header.js';
import Sidebar from '../../components/side-bar/Sidebar.js';
import './styles.css'

function Cart() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
        </div>
      </div>
    </div>
  );
}

export default Cart;
