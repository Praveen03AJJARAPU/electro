import React from 'react'
import { urlFor } from '../../utils/data'
import { Link } from 'react-router-dom'

const SecondBanner = ({ banner }) => {
  return (
    <>
      {banner && (
        <div className="hero-banner-container relative bg-green-500 mx-2 md:mx-7 xl:mx-56 my-8 px-20 rounded-xl flex ">
          <div className="content flex flex-col items-center md:items-start">
            <p className="text-xl font-extrabold text-slate-50">{banner?.largeText1}</p>
            <p className="uppercase text-2xl md:text-5xl lg:text-8xl font-extrabold text-slate-50 mt-3">
              SmartWatches
            </p>
            <p className='mt-3 text-sm md:text-xl font-bold text-slate-50'>{banner?.smallText}</p>
            <Link to={`/product/${'boat Future X'}`}>
              
            <div className="flex rounded-3xl text-xl border-2 border-slate-50 w-max font-bold mt-5">
              <p className="bg-slate-50 text-green-500 px-2 md:px-5 py-1 rounded-s-3xl ">
                 {banner?.discount}
              </p>
              <p className="px-2 md:px-10 py-1 text-slate-50 line-through">
                {banner?.saleTime}
              </p>
            </div>
            </Link>
          </div>
          <img className="hero-container-image" src={urlFor(banner?.image)} alt="" />
        </div>
      )}
    </>
  )
}

export default SecondBanner