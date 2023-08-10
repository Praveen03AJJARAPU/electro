import React, { useEffect } from 'react'
import { urlFor } from '../../utils/data'
import {Link} from 'react-router-dom'
import '../App.css'

const Popular = ({ products }) => {

  

  return (
    <div>
      <div className="content text-center mt-24 mb-10">
        <h1 className="text-2xl md:text-5xl font-bold text-orange-600 mb-3">
          Most Popular Products
        </h1>
        <p className="text-sm md:text-xl text-orange-900">
          Favourite and best among the millions of users.
        </p>
      </div>
      <div className="flex justify-center mx-24 flex-wrap">
        {products &&
          products.map((product) => (
            <Link to={`/product/${product?.title}`}>
              <div className="holder mb-7 mr-5">
                <img
                  className="pro-image bg-orange-100 p-2 mr-5 mb-2 rounded-xl"
                  src={urlFor(product.image[0])}
                  width={250}
                  height={250}
                  alt=""
                />
                <p className="font-extralight">{product.title}</p>
                <p className="font-bold">₹ {product.price}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Popular