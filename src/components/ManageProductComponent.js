import React from 'react';
import { Link } from 'react-router-dom';

class ManageProductComponent extends React.Component {
    render() {
       return (
        <div class="page-content-wrapper">
        <div class="page-content">
            <div class="page-bar">
                <div class="page-title-breadcrumb">
                    <div class=" pull-left">
                        <div class="page-title">Manage Vendors</div>
                    </div>
                    <ol class="breadcrumb page-breadcrumb pull-right">
                        <li><i class="fa fa-home"></i>&nbsp;<a class="parent-item" href="index.html">Home</a>&nbsp;<i class="fa fa-angle-right"></i>
                        </li>
                        <li><a class="parent-item" href="">Vendor Configurations</a>&nbsp;<i class="fa fa-angle-right"></i>
                        </li>
                        <li class="active">Manage Registered Vendors</li>
                    </ol>
                </div>
            </div>
            <div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="card card-box">
                    <div class="card-head">
                        <header>Vendor Name 1</header>
                        <div class="tools">
                            <a class="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
                            <a class="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
                            <a class="t-close btn-color fa fa-times" href="javascript:;"></a>
                        </div>
                    </div>
                    <div class="card-body row">
                        <div class="col-lg-2 p-t-20">
                            Disable page
                        </div>
                        <div class="col-lg-4 p-t-20">
                            <label class="switchToggle">
                                <input type="checkbox" checked/>
                                <span class="slider green round"></span>
                            </label>
                        </div>
                        <div class="col-lg-6 p-t-20"></div>

                        <div class="col-lg-12 p-t-20">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-lg-6 text-left">
                                        <label>Select Products to Accept</label>
                                    </div>
                                    <div class="col-lg-6 text-right">
                                        <a href="">View Details</a>
                                    </div>
                                </div>
                                <div class="checkbox checkbox-icon-black p-0">
                                    <input id="checkbox1" type="checkbox" />
                                    <label for="checkbox1">
                                        Product 1
                                    </label>
                                </div>
                                <div class="checkbox checkbox-icon-black p-0">
                                    <input id="checkbox2" type="checkbox" checked="checked"/>
                                    <label for="checkbox2">
                                        Product 2
                                    </label>
                                </div>
                                <div class="checkbox checkbox-icon-black p-0">
                                    <input id="checkbox3" type="checkbox" disabled/>
                                    <label for="checkbox3">
                                        Product 3
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12 p-t-20">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-lg-6 text-left">
                                        <label>Featured Products</label>
                                    </div>
                                    <div class="col-lg-6 text-right">
                                        <a href="">View Details</a>
                                    </div>
                                </div>
                                <div class="checkbox checkbox-icon-black p-0">
                                    <input id="featureCheckbox1" type="checkbox"/>
                                    <label for="checkbox1">
                                        Featured 1
                                    </label>
                                </div>
                                <div class="checkbox checkbox-icon-black p-0">
                                    <input id="featureCheckbox2" type="checkbox" checked="checked"/>
                                    <label for="checkbox2">
                                        Featured 1
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12 p-t-20 text-left">
                            <button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Save</button>
                            <button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">Clear</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="card card-box">
                    <div class="card-head">
                        <header>Vendor Name 2</header>
                        <div class="tools">
                            <a class="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
                            <a class="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
                            <a class="t-close btn-color fa fa-times" href="javascript:;"></a>
                        </div>
                    </div>
                    <div class="card-body row">
                        <div class="col-lg-2 p-t-20">
                            Disable page
                        </div>
                        <div class="col-lg-4 p-t-20">
                            <label class="switchToggle">
                                <input type="checkbox" checked/>
                                <span class="slider green round"></span>
                            </label>
                        </div>
                        <div class="col-lg-6 p-t-20"></div>

                        <div class="col-lg-12 p-t-20">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-lg-6 text-left">
                                        <label>Select Products to Accept</label>
                                    </div>
                                    <div class="col-lg-6 text-right">
                                        <a href="">View Details</a>
                                    </div>
                                </div>
                                <div class="checkbox checkbox-icon-black p-0">
                                    <input id="product1" type="checkbox"/>
                                    <label for="checkbox1">
                                        Product 1
                                    </label>
                                </div>
                                <div class="checkbox checkbox-icon-black p-0">
                                    <input id="product2" type="checkbox" checked="checked"/>
                                    <label for="checkbox2">
                                        Product 2
                                    </label>
                                </div>
                                <div class="checkbox checkbox-icon-black p-0">
                                    <input id="product3" type="checkbox" disabled/>
                                    <label for="checkbox3">
                                        Product 3
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12 p-t-20">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-lg-6 text-left">
                                        <label>Featured Products</label>
                                    </div>
                                    <div class="col-lg-6 text-right">
                                        <a href="">View Details</a>
                                    </div>
                                </div>
                                <div class="checkbox checkbox-icon-black p-0">
                                    <input id="feature1" type="checkbox"/>
                                    <label for="checkbox1">
                                        Featured 1
                                    </label>
                                </div>
                                <div class="checkbox checkbox-icon-black p-0">
                                    <input id="feature2" type="checkbox" checked="checked"/>
                                    <label for="checkbox2">
                                        Featured 1
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12 p-t-20 text-left">
                            <button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Save</button>
                            <button type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">Clear</button>
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

 export default ManageProductComponent;