import './App.css';
import DashBoard from './pages/DashBoard';
import OrderManagement from './pages/OrderManagement';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./assets/css/style.css";
import "./assets/css/material_style.css";
import "./assets/css/plugins.min.css";
import "./assets/css/responsive.css";
import "./assets/css/theme-color.css";
import "./assets/css/pages/animate_page.css";
import "./assets/css/pages/extra_pages.css";
import "./assets/css/pages/formlayout.css";
import "./assets/css/pages/inbox.min.css";
import "./assets/css/pages/pricing.css";
import "./assets/css/pages/steps.css";
import "./assets/css/pages/timeline.css";
import "./assets/css/pages/typography.css";
import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/plugins/summernote/summernote.css";
import "./assets/plugins/simple-line-icons/simple-line-icons.min.css";
import "./assets/plugins/font-awesome/css/font-awesome.min.css";
import "./assets/plugins/morris/morris.css";
import "./assets/plugins/material/material.min.css";
import "./assets/img/favicon.ico";


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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
