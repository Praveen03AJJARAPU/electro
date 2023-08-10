import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { client, urlFor } from '../../utils/data';
import Nav from './Nav';
import '../App.css'
import Cart from './Cart';
import { useStateContext } from '../../context/StateContext'
import Footer from './Footer';

const Product = () => {
  const {id} = useParams();
  
  const [product, setProduct] = useState();
  const [products, setProducts] = useState();

  const [showCart, setShowCart] = useState(false);
  const [index, setIndex] = useState(0)

  const query = '*[_type == "product"]'
    const productQuery =  client.fetch(query).then((data) => setProducts(data));
  
  const q = `*[_type == "product" && title == "${id}"]`
  client.fetch(q).then((data) => setProduct(data[0]));
  const { decQty, incQty, qty, onAdd } = useStateContext();

  return (
    <>
      <Nav />
      {product && (
        <div className="product-detail-container flex flex-col items-center lg:flex-row  px-5 ">
          <div className="img-container  lg:mr-10">
            <div className="product-detail-image ml-5 ">
              <img
                className="bg-slate-300 rounded-2xl hover:bg-orange-400 ease duration-200"
                src={urlFor(product?.image[index])}
                alt="hi"
              />
            </div>
            <div className="array flex mt-16 justify-center">
              {product?.image?.map((image, i) => (
                <img
                  key={i}
                  className={
                    i === index
                      ? "mr-3 border-2  border-orange-400 rounded-xl px-2 py-1"
                      : "mr-3 px-2 py-1"
                  }
                  src={urlFor(image)}
                  width={70}
                  height={70}
                  alt=""
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
          <div className="content mt-4">
            <p className="text-2xl md:text-5xl font-bold text-orange-500 mb-5">
              {product?.title}
            </p>
            <p className="lg:w-3/4 text-orange-950 mb-5">
              {product?.description}
            </p>
            <p className="text-3xl text-orange-800">₹ {product?.price}</p>
            <p>{product?.sale}</p>
            <div className="flex mt-5 items-center">
              <p className="text-xl mr-5">Quantity:</p>
              <div className="flex">
                <button
                  className="px-4 py-2 border-2 bg-orange-400"
                  onClick={decQty}
                >
                  -
                </button>
                <p className="px-4 py-2 border-2 ">{qty}</p>
                <button
                  className="px-4 py-2 border-2 bg-orange-400"
                  onClick={incQty}
                >
                  +
                </button>
              </div>
            </div>
            <div className="btn mt-10">
              <button className="bg-orange-400 mr-5 text-slate-50 px-5 py-2 rounded-3xl text-xl">
                Buy Now
              </button>
              <button
                className="border-2 text-orange-400 mt-2 border-orange-400 px-5 text-xl py-2 rounded-3xl"
                onClick={() => onAdd(product, qty)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="maylike-products-wrapper">
        <h1 className="marquee-text px-10">
          You may like these
        </h1>
        <div className="marquee">
          <div className="maylike-products-container track ">
            {products &&
              products.map((product) => (
                <Link to={`/product/${product?.title}`} reloadDocument>
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
      </div>

      <Footer />
    </>
  );
}

export default Product