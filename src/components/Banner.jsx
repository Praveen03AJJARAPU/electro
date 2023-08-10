import React, { useEffect } from 'react'
import { urlFor } from '../../utils/data'
import '../App.css'
import { Link } from 'react-router-dom';

const Banner = ({ banner }) => {
  
  return (
    <>
      {banner && (
        <div className="hero-banner-container   bg-orange-400 mx-10 md:mx-10 xl:mx-56 my-10 px-10 rounded-xl flex  ">

          
          <div className="content flex flex-col  md:items-start">
            <p className="text-xl font-extrabold text-slate-50">
              {banner?.largeText1}
            </p>
            <p className="uppercase text-lg md:text-5xl lg:text-9xl font-extrabold text-slate-50 mt-3">
              {banner?.largeText2}
            </p>
            <p className="mt-3 text-lg md:text-xl font-bold text-slate-50">
              {banner?.smallText}
            </p>
            <Link to={`/product/${'boat Nirvana 751'}`}>
              <div className="flex rounded-3xl text-xl border-2 border-slate-50 w-max font-bold mt-4 md:mt-10">
                <p className="bg-slate-50  text-orange-500 px-1 md:px-5 py-1 rounded-s-3xl ">
                  Grab @ {banner?.discount}
                </p>
                <p className="px-3 md:px-10 py-1 text-slate-50 line-through">
                  {banner?.saleTime}
                </p>
              </div>
            </Link>
         
          </div>
          <img
            className="hero-container-image"
            src={urlFor(banner?.image)}
            alt=""
          />
        </div>
      )}
    </>
  );
}

export default Banner