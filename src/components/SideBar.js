import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    render() {
       return (
            <div className="sidebar-container">
				<div className="sidemenu-container navbar-collapse collapse fixed-menu">
					<div id="remove-scroll">
						<ul className="sidemenu page-header-fixed p-t-20" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200">
							<li className="sidebar-toggler-wrapper hide">
								<div className="sidebar-toggler">
									<span></span>
								</div>
							</li>
							<li className="sidebar-user-panel">
								<div className="user-panel">
									<div className="row">
										<div className="sidebar-userpic">
											<img src="assets/img/dp.jpg" className="img-responsive" alt="" /> </div>
									</div>
									<div className="profile-usertitle">
										<div className="sidebar-userpic-name"> John Deo </div>
										<div className="profile-usertitle-job"> Manager </div>
									</div>
									<div className="sidebar-userpic-btn">
										<a className="tooltips" href="/userProfile" data-placement="top" data-original-title="Profile">
											<i className="material-icons">person_outline</i>
										</a>
										<a className="tooltips" href="/emailInbox" data-placement="top" data-original-title="Mail">
											<i className="material-icons">mail_outline</i>
										</a>
										<a className="tooltips" href="chat.html" data-placement="top" data-original-title="Chat">
											<i className="material-icons">chat</i>
										</a>
										<a className="tooltips" href="login.html" data-placement="top" data-original-title="Logout">
											<i className="material-icons">input</i>
										</a>
									</div>
								</div>
							</li>
							<li className="nav-item start active">
								<a href="/dashboard" className="nav-link nav-toggle">
									<i className="material-icons">dashboard</i>
									<span className="title">Dashboard</span>
									<span className="selected"></span>
								</a>
							</li>

							<li className="nav-item">
								<a href="/order" className="nav-link nav-toggle">
									<i className="material-icons">business_center</i>
									<span className="title">Order Management</span>
								</a>
							</li>

							<li className="nav-item">
								<a href="" className="nav-link nav-toggle">
									<i className="material-icons">account_circle</i>
									<span className="title">Vendor Configurations</span>
									<span className="arrow"></span>
								</a>
								<ul className="sub-menu">
									<li className="nav-item">
										<a href="/newVendor" className="nav-link ">
											<span className="title">New applications</span>
										</a>
									</li>
									<li className="nav-item">
										<a href="/manageProduct" className="nav-link ">
											<span className="title">Manage Registered Vendors</span>
										</a>
									</li>
									<li className="nav-item">
										<a href="/payment" className="nav-link ">
											<span className="title">Payment</span>
										</a>
									</li>
								</ul>
							</li>

							<li className="nav-item">
								<a href="/settings" className="nav-link nav-toggle">
									<i className="material-icons">settings</i>
									<span className="title">Settings</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
       );
    }
}

export default SideBar;