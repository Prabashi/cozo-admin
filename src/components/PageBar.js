import React from 'react';
import { Link } from 'react-router-dom';

class PageBar extends React.Component {
    render() {
       return (
        <div className="page-bar">
            <div className="page-title-breadcrumb">
                <div className=" pull-left">
                    <div className="page-title">Dashboard</div>
                </div>
                <ol className="breadcrumb page-breadcrumb pull-right">
                    <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
                    </li>
                    <li className="active">Dashboard</li>
                </ol>
            </div>
        </div>
       );
    }
}

export default PageBar;