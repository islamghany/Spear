import React from 'react'
import Slide from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider=()=> {
    const settings = {
        dots: true,
        fade:true,  
        infinite: true,
        speed: 700,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="slider">
          <Slide {...settings}>
            <div className="slider__wrapper slider__wrapper-1 ">
            <div className="content">
              <h1>Awesome Collecton</h1>
              <p>You can have anything you want in life if you dress for it</p>
            </div>
            </div> 
            <div className="slider__wrapper slider__wrapper-2">
            <div className="content">
              <h1>Go with trend</h1>
              <p>Fashion is a form of ugliness so intolerable that we have to alter it every six months</p>
            </div>
            </div>
            <div className="slider__wrapper slider__wrapper-3">
            <div className="content">
              <h1>New Collection</h1>
              <p>The clothes of Courreges are so nice.</p>
            </div>
            </div>
            <div className="slider__wrapper slider__wrapper-4">
            <div className="content">
              <h1>Wear It ..!</h1>
              <p>Clothes mean nothing until someone lives in them</p>
            </div>
            </div>
            <div className="slider__wrapper slider__wrapper-5">
            <div className="content">
              <h1>New fashion</h1>
              <p>There isn't anybody that looks like me without clothes on</p>
            </div>
            </div>            
          </Slide>
        </div>
      );
}

export default Slider
