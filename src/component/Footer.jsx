import React from 'react'
import { FaTwitter,FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <h1> Santadoge </h1>
        <p>Before you go, don't forget to Join the socials for the latest updates, news, and community discussions about the Santadoge memecoin on the Solana chain. Thank you for being a part of our journey, and we hope to see you again soon! Happy browsing!</p>
        <FaTwitter className='footer-icons'/>
        <FaTelegramPlane className='footer-icons'/>
      </div>
      <div className='footer-right'>
        <h1> Quick Links</h1>
        <div>
            <ul>
                <li> {'>'} Home</li>
                <li>{'>'}  About Us</li>
                <li>{'>'}  Tokenomics</li>
                <li>{'>'}  Dextools</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
