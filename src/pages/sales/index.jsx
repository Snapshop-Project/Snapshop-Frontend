import './styles.css'
import Header from '../../components/main-header/Header.js';
import Sidebar from '../../components/side-bar/Sidebar.js';
import Grid2 from '@mui/material/Grid2';

function Sales() {
  return (
    <div className="sales-app-container">
      <Header />
      <div className="sales-main-content">
        <Sidebar />
        <div className="sales-content-area">
            <Grid2 container spacing={7}>
            </Grid2>
        </div>
      </div>
    </div>
  );
}

export default Sales;