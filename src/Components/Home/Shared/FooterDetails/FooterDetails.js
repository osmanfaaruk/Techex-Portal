import React from 'react';
import { Link } from 'react-router-dom';

const FooterDetails = (props) => {
    return (
        <div className="col-md-3 ">
        <h6 className="text-dark" style={{fontFamily:'sans-serif', fontWeight:'bold'}}>{props.menuTitle ? props.menuTitle : " "}</h6>
        <ul className="list-unstyled mt-4">
             {
                 props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-dark" style={{textDecoration:'none', fontFamily:'sans-serif', fontWeight:'bold'}}>{item.name}</Link></li>)
             }
        </ul>
        {props.children && props.children}
    </div>
    );
};

export default FooterDetails;