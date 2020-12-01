import './App.css';
import DashBoard from './pages/DashBoard';
import OrderManagement from './pages/OrderManagement';
import ManageProduct from './pages/ManageProduct';
import NewVendor from './pages/NewVendor';
import PaymentPage from './pages/PaymentPage';
import Settings from './pages/Settings';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
          <Route path="/dashboard">
            <DashBoard />
          </Route>
          <Route path="/order">
            <OrderManagement />
          </Route>
          <Route path="/newVendor">
            <NewVendor />
          </Route>
          <Route path="/manageProduct">
            <ManageProduct />
          </Route>
          <Route path="/payment">
            <PaymentPage />
          </Route>    
          <Route path="/settings">
            <Settings />
          </Route>    
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
