import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter, faReddit, faYoutube} from '@fortawesome/free-brands-svg-icons'
import './SocialMedia.css';
const SocialMedia = () => {
    return (
        <div className="d-flex ok gap ">
         <div className="ms-2">
         <button className="socialMediaBtn ">
          <FontAwesomeIcon icon={faFacebookF} /> {" "}
           Facebook
          </button>
         </div>
            <button className="socialMediaBtn">
          <FontAwesomeIcon icon={faTwitter} /> {" "}
          Twitter
          </button>
            <button className="socialMediaBtn">
          <FontAwesomeIcon icon={faReddit} /> {" "}
          Reddit
          </button>
            <button className="socialMediaBtn">
          <FontAwesomeIcon icon={faYoutube} /> {" "}
          YouTube
          </button>

        </div>
    );
};

export default SocialMedia;