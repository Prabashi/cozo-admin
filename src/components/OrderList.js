import React from 'react';
import { Link } from 'react-router-dom';

class OrderList extends React.Component {
    render() {
       return (
        <div class="page-content-wrapper">
        <div class="page-content">
            <div class="page-bar">
                <div class="page-title-breadcrumb">
                    <div class=" pull-left">
                        <div class="page-title">Manage Orders</div>
                    </div>
                    <ol class="breadcrumb page-breadcrumb pull-right">
                        <li><i class="fa fa-home"></i>&nbsp;<a class="parent-item" href="index.html">Home</a>&nbsp;<i class="fa fa-angle-right"></i>
                        </li>
                        <li class="active"><a class="parent-item" href="">Order Management</a></li>
                    </ol>
                </div>
            </div>
            <div className="row">
            <div className="col-md-12">
                <div className="card card-box">
                    <div className="card-head">
                        <header>All Orders</header>
                        <div className="tools">
                            <a className="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
                            <a className="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
                            <a className="t-close btn-color fa fa-times" href="javascript:;"></a>
                        </div>
                    </div>
                    <div className="card-body ">
                        <div className="row p-b-20">
                            <div className="col-md-6 col-sm-6 col-6"></div>
                            <div className="col-md-6 col-sm-6 col-6">
                                <div className="btn-group pull-right">
                                    <a className="btn deepPink-bgcolor  btn-outline dropdown-toggle" data-toggle="dropdown">Tools
                                        <i className="fa fa-angle-down"></i>
                                    </a>
                                    <ul className="dropdown-menu pull-right">
                                        <li>
                                            <a href="javascript:;">
                                                <i className="fa fa-print"></i> Print </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <i className="fa fa-file-pdf-o"></i> Save as PDF </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <i className="fa fa-file-excel-o"></i> Export to Excel </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="table-scrollable">
                        <table className="table table-hover table-checkable order-column full-width" id="example4">
                            <thead>
                                <tr>
                                    <th className="center"> Order Id</th>
                                    <th className="center"> Vendor Name </th>
                                    <th className="center"> Purchased On </th>
                                    <th className="center"> Product Price($) </th>
                                    <th className="center"> Commission($) </th>
                                    <th className="center"> Vendor Payment($) </th>
                                    <th className="center"> Order Status </th>
                                    <th className="center"> Vendor Payment Status </th>
                                    <th className="center"> Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="odd gradeX">
                                    <td className="user-circle-img">
                                        <span>100087654</span>
                                    </td>
                                    <td className="center">Vendor1</td>
                                    <td className="user-circle-img">
                                        <span>Dec 23,2020 5:45:00 PM</span>
                                    </td>
                                    <td className="center">
                                        <span>120</span>
                                    </td>
                                    <td className="center">
                                        <span>10</span>
                                    </td>
                                    <td className="center">
                                        <span>108.80</span>
                                    </td>
                                    <td className="center">
                                        <span>DELIVERED</span>
                                    </td>
                                    <td className="center">
                                        <a href="pay_vendor.html" className="btn deepPink-bgcolor btn-xs">
                                            <span>PAY NOW</span>
                                        </a>
                                    </td>
                                    <td className="center">
                                        <a href="#" className="">
                                            <span>View</span>
                                        </a>
                                    </td>
                                </tr>
                                <tr className="odd gradeX">
                                    <td className="user-circle-img">
                                        <span>100087698</span>
                                    </td>
                                    <td className="center">Vendor2</td>
                                    <td className="user-circle-img">
                                        <span>Dec 13,2020 6:25:00 PM</span>
                                    </td>
                                    <td className="center">
                                        <span>120</span>
                                    </td>
                                    <td className="center">
                                        <span>10</span>
                                    </td>
                                    <td className="center">
                                        <span>108.80</span>
                                    </td>
                                    <td className="center">
                                        <span>CANCELLED</span>
                                    </td>
                                    <td className="center">
                                        <a href="pay_vendor.html" className="btn deepPink-bgcolor btn-xs">
                                            <span>Refund</span>
                                        </a>
                                    </td>
                                    <td className="center">
                                        <a href="#" className="">
                                            <span>View</span>
                                        </a>
                                    </td>
                                </tr>
                                <tr className="odd gradeX">
                                    <td className="user-circle-img">
                                        <span>100087456</span>
                                    </td>
                                    <td className="center">Vendor3</td>
                                    <td className="user-circle-img">
                                        <span>Nov 13,2020 6:25:00 PM</span>
                                    </td>
                                    <td className="center">
                                        <span>120</span>
                                    </td>
                                    <td className="center">
                                        <span>10</span>
                                    </td>
                                    <td className="center">
                                        <span>108.80</span>
                                    </td>
                                    <td className="center">
                                        <span>Pending</span>
                                    </td>
                                    <td className="center">
                                        <span>Pending</span>
                                    </td>
                                    <td className="center">
                                        <a href="#" className="">
                                            <span>View</span>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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

 export default OrderList;