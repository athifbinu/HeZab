import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Social = () => {
  return (
    <div className=''>
      <section className='bg-slate-50 m-3'>
          <div className='flex gap-5 justify-center sm:justify-end'>
            <FaFacebook/>
            <FaTwitterSquare/>
            <FaLinkedin/>
            <FaInstagramSquare/>
          </div>
      </section>


    </div>
  );
}

export default Social;
