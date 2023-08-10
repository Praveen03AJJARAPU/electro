import React, { useEffect, useState } from 'react'
import {Nav, Banner, Popular, Footer, SecondBanner} from './index'
import { client } from '../../utils/data';


const Home = () => {
    const [products, setProducts] = useState([]);
    const [banner, setBanner] = useState();
    const [footBanner, setFootBanner] = useState();

    const q = '*[_type == "product"]'
    const productQuery =  client.fetch(q).then((data) => setProducts(data));

    const query = '*[_type == "banner"]'
    const bannerQuery = client.fetch(query).then((data) => {
      setBanner(data[1])
      setFootBanner(data[0])
    });

    useEffect(() => {
        productQuery
        bannerQuery
    },[])
    
  return (
    <div>
        <Nav />
        <Banner banner={banner} /> 
        <Popular products={products} /> 
        <SecondBanner banner={footBanner} /> 
        <Footer /> 
    </div>
  )
}

export default Home