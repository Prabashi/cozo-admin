import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
       return (
        <div className="page-footer">
        <div className="page-footer-inner"> 2020 &copy; COZO MARKET PLACE
            <span component={Link} to="mailto:redstartheme@gmail.com" target="_top" className="makerCss">RedStar Theme</span>
        </div>
        <div className="scroll-to-top">
            <i className="icon-arrow-up"></i>
        </div>
    </div>
       );
    }
 }

 export default Footer;