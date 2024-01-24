import React from 'react'
import logo from "../../assets/logo.png"
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                <img src={logo} alt="Logo" />
            </div>
          
            {/* copyright */}
            <div className="footer-copyright">
                <p>&#169; 2024. All rights reserved</p>
            </div>
            {/* social */}
            <ul className="footer-social-media">
                <li>
                    <a target='_blank' href="https://www.facebook.com" rel="noreferrer">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                </li>
                <li>
                    <a target='_blank' href="https://www.twitter.com" rel="noreferrer">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a target='_blank' href="https://www.instagram.com" rel="noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a target='_blank' href="https://www.youtube.com" rel="noreferrer">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </li>
                <li>
                    <a target='_blank' href="https://www.linkedin.com" rel="noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer