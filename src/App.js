import './App.css';
import DashBoard from './pages/DashBoard';
import OrderManagement from './pages/OrderManagement';
import ManageProduct from './pages/ManageProduct';
import NewVendor from './pages/NewVendor';
import PaymentPage from './pages/PaymentPage';
import Settings from './pages/Settings';
import UserProfile from './pages/UserProfile';
import EmailInbox from './pages/EmailInbox';

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
          <Route path="/userProfile">
            <UserProfile />
          </Route>
          <Route path="/emailInbox">
            <EmailInbox />
          </Route>    
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
