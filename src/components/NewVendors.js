import React from 'react';
import { Link } from 'react-router-dom';

class NewVendors extends React.Component {
    render() {
       return (
		<div class="page-content-wrapper">
		<div class="page-content">
			<div class="page-bar">
				<div class="page-title-breadcrumb">
					<div class=" pull-left">
						<div class="page-title">All Applications</div>
					</div>
					<ol class="breadcrumb page-breadcrumb pull-right">
						<li><i class="fa fa-home"></i>&nbsp;<a class="parent-item" href="index.html">Home</a>&nbsp;<i class="fa fa-angle-right"></i>
						</li>
						<li><a class="parent-item" href="">Vendor Configurations</a>&nbsp;<i class="fa fa-angle-right"></i>
						</li>
						<li class="active">New Applications</li>
					</ol>
				</div>
			</div>
               <div className="row">
						<div className="col-md-12 col-sm-12">
							<div className="card card-box">
								<div className="card-head">
									<header>Vendor Name 1</header>
									<div className="tools">
										<a className="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
										<a className="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
										<a className="t-close btn-color fa fa-times" href="javascript:;"></a>
									</div>
								</div>
								<div className="card-body row">
									<div className="col-lg-6 p-t-20">
										<div className = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
											<input className = "mdl-textfield__input" type = "text" id = "txtModeltName" value="12, dadhaj, SL"/>
											<label className = "mdl-textfield__label">Vendor Name</label>
										</div>
									</div>
									<div className="col-lg-6 p-t-20">
										<div className = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
											<input className = "mdl-textfield__input" type = "text" id = "txtModeltEmail" value="12, dadhaj, SL"/>
											<label className = "mdl-textfield__label">Vendor Email</label>
										</div>
									</div>
									<div className="col-lg-12 p-t-20 text-left">
										<button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Accept & Create Account</button>
										<button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">Reject Application</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-12 col-sm-12">
							<div className="card card-box">
								<div className="card-head">
									<header>Vendor Name 2</header>
									<div className="tools">
										<a className="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
										<a className="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
										<a className="t-close btn-color fa fa-times" href="javascript:;"></a>
									</div>
								</div>
								<div className="card-body row">
									<div className="col-lg-6 p-t-20">
										<div className = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
											<input className = "mdl-textfield__input" type = "text" id = "txtModeltName2" value="12, dadhaj, SL"/>
											<label className = "mdl-textfield__label">Vendor Name</label>
										</div>
									</div>
									<div className="col-lg-6 p-t-20">
										<div className = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
											<input className = "mdl-textfield__input" type = "text" id = "txtModeltEmail2" value="12, dadhaj, SL"/>
											<label className = "mdl-textfield__label">Vendor Email</label>
										</div>
									</div>
									<div className="col-lg-12 p-t-20 text-left">
										<button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Accept & Create Account</button>
										<button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">Reject Application</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-12 col-sm-12">
							<div className="card card-box">
								<div className="card-head">
									<header>Vendor Name 3</header>
									<div className="tools">
										<a className="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
										<a className="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
										<a className="t-close btn-color fa fa-times" href="javascript:;"></a>
									</div>
								</div>
								<div className="card-body row">
									<div className="col-lg-6 p-t-20">
										<div className = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
											<input className = "mdl-textfield__input" type = "text" id = "txtModeltName3" value="12, dadhaj, SL"/>
											<label className = "mdl-textfield__label">Vendor Name</label>
										</div>
									</div>
									<div className="col-lg-6 p-t-20">
										<div className = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
											<input className = "mdl-textfield__input" type = "text" id = "txtModeltEmail3" value="12, dadhaj, SL"/>
											<label className = "mdl-textfield__label">Vendor Email</label>
										</div>
									</div>
									<div className="col-lg-12 p-t-20 text-left">
										<button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Accept & Create Account</button>
										<button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">Reject Application</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
           </div>
       );
    }
 }

 export default NewVendors;