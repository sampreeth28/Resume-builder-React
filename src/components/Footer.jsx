import React from 'react'
import { CiMail } from "react-icons/ci";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:'grey' }} className='d-flex justify-content-center align-items-center flex-column text-light'>
        <h3>Contact Us</h3>
        <h5><CiMail /> resumebuilder@gmail.com</h5>
        <h6><MdOutlinePhoneInTalk />9745939713</h6>
        <h4>Connect with us...</h4>
        <div style={{fontSize:'25px'}} className='d-flex justify-content-center align-items-center gap-3 '><FaInstagram /> <FaFacebook /> <FaSquareXTwitter /></div>
        <h6 style={{margin:'10px'}}>This is a webpage created using react</h6>

    </div>
  )
}

export default Footer