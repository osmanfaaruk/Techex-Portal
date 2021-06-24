import React from 'react';
import './Footer.css';
import FooterDetails from '../FooterDetails/FooterDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
const Footer = () => {
    const useFulLinks = [
        {name: "About us"},
        {name: "Information"},
        {name: "Privacy Policy"},
        {name: "Get an Offer"},
        {name:"Blogs"}
    ]
    const ourAddress = [
        {name: "Halishahar"},
        {name: "Chittagong Bangladesh"},
       
    ]
    const ourTerms = [
        {name: "Free Support"},
        {name: "Contacts" },
        {name: "Typography"},
        {name: "FAQ" },
    ]
    const services = [
        {name: "Lorem"},
        {name: "Lorem"},
        {name: "Lorem"},
        {name: "Lorem"},
       
    ]
    return (
        <footer className="footer-area clear-both text-dark" >
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterDetails key={1} menuTitle="USEFUL LINKS" menuItems={useFulLinks}/>
                    <FooterDetails  key={2} menuTitle="SERVICES" menuItems={services}/>
                    <FooterDetails key={3} menuTitle="OUR TERMS" menuItems={ourTerms}/>
                    <FooterDetails key={4} menuTitle="OUR ADDRESS" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" style={{backgroundColor:'blue'}} icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" style={{backgroundColor:'red'}} icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" style={{backgroundColor:'#ff6b6b'}} icon={faInstagram} /></a></li>
                        </ul>
                    </FooterDetails>
                </div>
                <div className="copyRight text-center fw-bold" style={{fontFamily:'sans-serif'}}>
                    <p className="mb-0">Copyright © {(new Date()).getFullYear()} Techex-Portal All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;