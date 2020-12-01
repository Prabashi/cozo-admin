import React from 'react';
// import { Link } from 'react-router-dom';
import NavigationPanel from '../components/NavigationPanel';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import ManageProductComponent from '../components/ManageProductComponent';

class NewVendor extends React.Component {
    render() {
       return (
        <div className="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md header-white dark-sidebar-color logo-dark">
            <div className="page-wrapper">
            <NavigationPanel></NavigationPanel>
            <div className="page-container">
                <SideBar></SideBar>
                <ManageProductComponent></ManageProductComponent>
            </div>
            <Footer></Footer>
            </div>
        </div>
       );
    }
 }

 export default NewVendor;