import './App.css';
import DashBoard from './pages/DashBoard';
import OrderManagement from './pages/OrderManagement';

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
            <OrderManagement />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
