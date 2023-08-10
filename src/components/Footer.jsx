import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { AiTwotoneThunderbolt } from "react-icons/ai";

const Footer = () => {
  // console.log(images)
  return (
    <div className="footer mt-36 bg-slate-200 p-10">
      <div className="nav flex items-center mb-10">
        <AiTwotoneThunderbolt size={40} />
        <h2 className="text-lg font-semibold uppercase">Electro</h2>
      </div>
      <div className="flex justify-around">
        <div className="tags flex flex-wrap ">
          <div className="one mr-20">
            <p className='mb-5'>About</p>
            <p className='mb-5'>Home</p>
            <p className='mb-5'>Contact</p>
          </div>
          <div className="one">
            <p className='mb-5'>Customer care</p>
            <p className='mb-5'>Address</p>
            <p>Advertisements</p>
          </div>
        </div>
        <div className="social flex flex-col md:flex-row items-center">
          <p className=' mr-2 text-xs md:mr-5 mb-2'>Follow me on :</p>
          <ul className="flex flex-col md:flex-row flex-wrap">
            <a className='mr-5 mb-3' href='https://www.facebook.com/praveen.ajjarapu.5?mibextid=ZbWKwL'><BsFacebook size={30} /></a>
            <a className='mr-5 mb-3' href='https://twitter.com/Praveen_Ajj'><BsTwitter size={30} /></a>
            <a className='mr-5 mb-3' href='https://www.linkedin.com/in/praveen-ajjarapu-229657226/'><BsLinkedin size={30} /></a>
            <a className='' href='https://github.com/Praveen03AJJARAPU'><BsGithub size={30} /></a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer