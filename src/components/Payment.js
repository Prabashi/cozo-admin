import React from 'react';
import { Link } from 'react-router-dom';

class Payment extends React.Component {
    render() {
       return (
        <div class="page-content-wrapper">
        <div class="page-content">
            <div class="page-bar">
                <div class="page-title-breadcrumb">
                    <div class=" pull-left">
                        <div class="page-title">Vendor Payments</div>
                    </div>
                    <ol class="breadcrumb page-breadcrumb pull-right">
                        <li><i class="fa fa-home"></i>&nbsp;<a class="parent-item" href="index.html">Home</a>&nbsp;<i class="fa fa-angle-right"></i>
                        </li>
                        <li><a class="parent-item" href="">Vendor Configurations</a>&nbsp;<i class="fa fa-angle-right"></i>
                        </li>
                        <li class="active">Payment</li>
                    </ol>
                </div>
            </div>
                <div class="row">
                <div class="col-sm-12">
                    <div class="card-box ">
                        <div class="card-head">
                            <header>Calculate Commission</header>
                            <div class="tools">
                                <a class="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
                                <a class="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
                                <a class="t-close btn-color fa fa-times" href="javascript:;"></a>
                            </div>
                        </div>
                        <div class="card-body row">
                            <div class="col-lg-12 p-t-20">
                            </div>
                        </div>
                </div>
                    <div class="card-box ">
                        <div class="card-head">
                            <header>Pay Vendor</header>
                            <div class="tools">
                                <a class="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
                                <a class="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
                                <a class="t-close btn-color fa fa-times" href="javascript:;"></a>
                            </div>
                        </div>
                        <div class="card-body row">
                            <div class="col-lg-12 p-t-20">
                            </div>
                        </div>
                    </div>
                    <div class="card-box ">
                        <div class="card-head">
                            <header>Generate Credit Memo</header>
                            <div class="tools">
                                <a class="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
                                <a class="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
                                <a class="t-close btn-color fa fa-times" href="javascript:;"></a>
                            </div>
                        </div>
                        <div class="card-body row">
                            <div class="col-lg-12 p-t-20">
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

 export default Payment;





