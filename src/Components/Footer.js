import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faInstagram, faInstagramSquare, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"


function Footer() {


  const facebook = <FontAwesomeIcon icon={faFacebookF} />
  const instagram = <FontAwesomeIcon icon={faInstagram} />
  const twitter = <FontAwesomeIcon icon={faTwitter} />
  const youtube = <FontAwesomeIcon icon={faYoutube} />







  return (
      <div className="footer-container">
        <div className="social-links">
          <a href="" className="social-link">
            <i>{facebook}</i>
          </a>
          <a href="" className="social-link">
          <i>{instagram}</i>
          </a>
          <a href="" className="social-link">
          <i>{twitter}</i>
          </a>
          <a href="" className="social-link">
          <i>{youtube}</i>
          </a>
        </div>
        
        <ul className="footer-links">
          <li className="footer-link-wrapper">
            <a href="/" className="footer-link">
              <span className="footer-link-content">Audio and Subtitles</span>
            </a>
          </li>
          <li className="footer-link-wrapper">
            <a href="/" className="footer-link">
              <span className="footer-link-content">Audio Description</span>
            </a>
          </li>
          <li className="footer-link-wrapper">
            <a href="/" className="footer-link">
              <span className="footer-link-content">Help Center</span>
            </a>
          </li>
          <li className="footer-link-wrapper">
            <a href="/" className="footer-link">
              <span className="footer-link-content">Gift Cards</span>
            </a>
          </li>
          <li className="footer-link-wrapper">
            <a href="/" className="footer-link">
              <span className="footer-link-content">Media Center</span>
            </a>
          </li>
          <li className="footer-link-wrapper">
            <a href="/" className="footer-link">
              <span className="footer-link-content">Investor Relations</span>
            </a>
          </li>
          <li className="footer-link-wrapper">
            <a href="/" className="footer-link">
              <span className="footer-link-content">Jobs</span>
            </a>
          </li>
          <li className="footer-link-wrapper">
            <a href="/" className="footer-link">
              <span className="footer-link-content">Terms of Uses</span>
            </a>
          </li>
          <li className="footer-link-wrapper">
            <a href="/" className="footer-link">
              <span className="footer-link-content">Privacy</span>
            </a>
          </li>
          <li className="footer-link-wrapper">
            <a href="/" className="footer-link">
              <span className="footer-link-content">Legal Notices</span>
            </a>
          </li>
          <li className="footer-link-wrapper">
            <a href="/" className="footer-link">
              <span className="footer-link-content">Cookie Preferences</span>
            </a>
          </li>
          <li className="footer-link-wrapper">
            <a href="/" className="footer-link">
              <span className="footer-link-content">Corporate Information</span>
            </a>
          </li>
          <li className="footer-link-wrapper">
            <a href="/" className="footer-link">
              <span className="footer-link-content">Contact Us</span>
            </a>
          </li>
         

            
          
          
          
          
          
          
        
        </ul>
        
        <div className="footer-service">
          <button className="service-code">Service Code</button>
        </div>
        
        <div className="footer-copyright">
            <span>© 1997-2022 Netflix, Inc.</span>
        </div>
      </div>
  )
}

export default Footer