import { WindowSharp } from '@mui/icons-material';
import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {

  return (
    <div className="home">
      <div className="home__container">
        <img name="slide"
          className="home__image"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt=""
        />

        <div className='home__row'>
        <Product
            id="12321341"
            title="Verity: New York Times Bestseller USA Today Bestseller The Globe and Mail Bestseller Publishers Weekly Bestseller"
            price={11.26}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41d1gVUK1yL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <Product
            id="49538094"
            title="The Alchemist: A special 25th anniversary edition of the extraordinary international bestseller, including a new Foreword by Paulo Coelho."
            price={23.8}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51k2g+1mSWL._SX329_BO1,204,203,200_.jpg"
          />
            

        </div>

        <div className='home__row'>
        <Product
            id="4903850"
            title="Apple iPhone 13, 128GB, Midnight"
            price={655.9}
            rating={4}
            image="https://m.media-amazon.com/images/I/61BUt5ZErdL._AC_SX679_.jpg"
          />
          <Product
            id="23445930"
            title="Google Nest Wifi - Home Wi-Fi System - Wi-Fi Extender - Mesh Router for Wireless Internet"
            price={169.00}
            rating={3}
            image="https://m.media-amazon.com/images/I/61nj6CGEoaL._AC_SX466_.jpg"
          />
          <Product
            id="3254354345"
            title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 256GB) - Silver"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/815KnP2wjDS._AC_SX522_.jpg"
          />
        </div>

        
        <div className='home__row'>
        <Product
            id="908292132"
            title="Lenovo IdeaPad 3 Laptop, 15.6 FHD Display, AMD Ryzen 5 5500U, 8GB RAM, 512GB Storage, AMD Radeon 7 Graphics"
            price={575.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71CJhfgS6IL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="9088979332"
            title="Acer Nitro 5 AN517-54-79L1 Gaming Laptop | Intel Core i7-11800H | NVIDIA GeForce RTX 3050Ti Laptop GPU | 17.3"
            price={1067.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81Ivn5DIxhL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

        <div className='home__row'>
        <Product
            id="908435332"
            title="DIGGTORRE LCD Writing Tablet 10 inch - 2022 New Released Kids Drawing Tablet Doodle Boogie Board"
            price={11.98}
            rating={3}
            image="https://m.media-amazon.com/images/I/61t0N3f6mnL._AC_UL480_FMwebp_QL65_.jpg"
          />

<Product
            id="908435332"
            title="Derabika LCD Writing Tablet for Kids Colorful 10 Inch, Learning Educational Toddler Toys Gift"
            price={7.59}
            rating={4}
            image="https://m.media-amazon.com/images/I/618IrSOGqgL._AC_UL480_QL65_.jpg"
          />

<Product
            id="329435332"
            title="BLUE GINKGO Silicone Stacking Cups - Nesting Cups and Silicone Stacking Toy"
            price={17.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/51m9o6wU48L._AC_SX301_SY283_.jpg"
          />
        </div>
        <div className='home__row'>
        <Product
            id="90829332"
            title="VIOTEK GNV34DBE2 34-Inch UWQHD 144Hz Multimedia Gaming Monitor"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71ZLTTCYRSS._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
