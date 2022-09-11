import React from 'react'
import './Footer.css'

function Fotter() {

    const scrollToTop = () => {
         window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };

  return (
    <div>
    <div className="backtotop"><a onClick={scrollToTop} >Back to top </a></div>

<div className="flex-container">

 <div className="listone">
<h3 className="subheading">Get to Know Us</h3>
<p className="sublist">Careers</p>
<p className="sublist">Blog</p>
<p className="sublist">About Amazon</p>
<p className="sublist">Investor Relations</p>
<p className="sublist">Amazon Devices</p>
<p className="sublist">Amazon Science</p>
  </div>

 <div className="listtwo">
<h3 className="subheading">Make Money with Us</h3>
<p className="sublist">Sell products on Amazon</p>
<p className="sublist">Sell on Amazon Business</p>
<p className="sublist">Sell apps on Amazon</p>
<p className="sublist">Become an Affiliate</p>
<p className="sublist">Advertise Your Products</p>
<p className="sublist">Self-Publish with Us</p>
<p className="sublist">Host an Amazon Hub</p>
<p className="sublist">›See More Make Money with Us</p>
  </div>

<div className="listthree">
<h3 className="subheading">Amazon Payment Products</h3>
<p className="sublist">Amazon Business Card</p>
<p className="sublist">Shop with Points</p>
<p className="sublist">Reload Your Balance</p>
<p className="sublist">Amazon Currency Converter</p>
  </div>

<div className="listfore">
<h3 className="subheading">Let Us Help You</h3>
<p className="sublist">Amazon and COVID-19</p>
<p className="sublist">Your Account</p>
<p className="sublist">Your Orders</p>
<p className="sublist">Shipping Rates & Policies</p>
<p className="sublist">Returns & Replacements</p>
<p className="sublist">Manage Your Content and Devices</p>
<p className="sublist">Amazon Assistant</p>
<p className="sublist">Help</p>
  </div>

</div>

<div className="copyright">Made by <em><strong>Prajwal</strong></em> 🧑🏽‍💻</div>

</div>
  )
}

export default Fotter
