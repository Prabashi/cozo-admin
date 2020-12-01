import React from 'react';
import { Link } from 'react-router-dom';

class SettingsComponent extends React.Component {
    render() {
       return (
		<div class="page-content-wrapper">
                <div class="page-content">
                    <div class="page-bar">
                        <div class="page-title-breadcrumb">
                            <div class=" pull-left">
                                <div class="page-title">Settings</div>
                            </div>
                            <ol class="breadcrumb page-breadcrumb pull-right">
                                <li><i class="fa fa-home"></i>&nbsp;<a class="parent-item" href="index.html">Home</a>&nbsp;<i class="fa fa-angle-right"></i>
                                </li>
                                <li class="active"><a class="parent-item" href="">Settings</a></li>
                            </ol>
                        </div>
                    </div>
                     <div class="row">
						<div class="col-sm-12">
							<div class="card-box">
								<div class="card-head">
									<header>Approve Applications</header>
								</div>
								<div class="card-body row">
									<div class="col-lg-2 p-t-20">
										Enable Auto Approval
									</div>
									<div class="col-lg-4 p-t-20">
										<label class="switchToggle">
											<input type="checkbox" checked/>
											<span class="slider green round"></span>
										</label>
									</div>
									<div class="col-lg-6 p-t-20"></div>
								</div>
							</div>

							<div class="card-box">
								<div class="card-head">
									<header>Calculate Commission</header>
								</div>
								<div class="card-body row">
									<div class="col-lg-2 p-t-20"></div>
									<div class="col-lg-4 p-t-20"></div>
									<div class="col-lg-6 p-t-20"></div>
								</div>
							</div>

							<div class="card-box">
								<div class="card-head">
									<header>Create Product Categories</header>
								</div>
								<div class="card-body row">
									<div class="col-lg-6 p-t-20">
										<div class = "mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
											<input class = "mdl-textfield__input" type = "text" id = "txtLasttName"/>
											<label class = "mdl-textfield__label" >Category Name</label>
										</div>
									</div>
									<div class="col-lg-6 p-t-20">
										<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
											<input class="mdl-textfield__input" type="text" id="list2" value="" readonly tabIndex="-1"/>
											<label for="list2" class="pull-right margin-0">
												<i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
											</label>
											<label for="list2" class="mdl-textfield__label">Category Type</label>
											<ul data-mdl-for="list2" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
												<li class="mdl-menu__item" data-val="1">1</li>
												<li class="mdl-menu__item" data-val="2">2</li>
												<li class="mdl-menu__item" data-val="3">3</li>
											</ul>
										</div>
								</div>
									<div class="col-lg-12 p-t-20 text-left">
										<button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Save</button>
										<button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">Cancel</button>
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

 export default SettingsComponent;