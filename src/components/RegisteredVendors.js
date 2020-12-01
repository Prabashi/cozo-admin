import React from 'react';
import { Link } from 'react-router-dom';

class RegisteredVendors extends React.Component {
    render() {
       return (
            <div className="row">
            <div className="col-md-12 col-sm-12">
                <div className="card  card-box">
                    <div className="card-head">
                        <header>Registered Vendors</header>
                        <div className="tools">
                            <a className="fa fa-repeat btn-color box-refresh" href="#"></a>
                            <a className="t-collapse btn-color fa fa-chevron-down" href="#"></a>
                            <a className="t-close btn-color fa fa-times" href="#"></a>
                        </div>
                    </div>
                    <div className="card-body ">
                        <div className="table-wrap">
                            <div className="table-responsive">
                                <table className="table display product-overview mb-30" id="support_table5">
                                    <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>View</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Jens Brincker</td>
                                        <td>
                                            <a href="manage_products.html" className="btn btn-tbl-edit btn-xs">
                                                <i className="fa fa-pencil"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Mark Hay</td>
                                        <td>
                                            <a href="manage_products.html" className="btn btn-tbl-edit btn-xs">
                                                <i className="fa fa-pencil"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Anthony Davie</td>
                                        <td>
                                            <a href="manage_products.html" className="btn btn-tbl-edit btn-xs">
                                                <i className="fa fa-pencil"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>David Perry</td>
                                        <td>
                                            <a href="manage_products.html" className="btn btn-tbl-edit btn-xs">
                                                <i className="fa fa-pencil"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Anthony Davie</td>
                                        <td>
                                            <a href="manage_products.html" className="btn btn-tbl-edit btn-xs">
                                                <i className="fa fa-pencil"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Alan Gilchrist</td>
                                        <td>
                                            <a href="manage_products.html" className="btn btn-tbl-edit btn-xs">
                                                <i className="fa fa-pencil"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>Mark Hay</td>
                                        <td>
                                            <a href="manage_products.html" className="btn btn-tbl-edit btn-xs">
                                                <i className="fa fa-pencil"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Sue Woodger</td>
                                        <td>
                                            <a href="manage_products.html.html" className="btn btn-tbl-edit btn-xs">
                                                <i className="fa fa-pencil"></i>
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
       );
    }
 }

 export default RegisteredVendors;