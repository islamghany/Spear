import React from 'react';

const Subscribe =()=>{
	return(
         <section className="subscribe">
           <div className="subscribe__img">
           <img src="https://image.flaticon.com/icons/svg/2258/2258797.svg" alt="subscribe" /> 
           </div>
           <div className="subscribe__content">
             <h1>Get In Touch Now</h1>
             <p>Subscribe By Your E-Mail To Get You All Our New Collections</p>
           </div>
           <div className="subscribe__form">
              <input type="text" placeholder="Enter Email Address"/>
              <button>subscribe</button>
           </div>
           <div className="subscribe__social">
             <div className="subscribe__social--icon">
           <i className="icon ion-logo-facebook"></i>
             </div>
             <div className="subscribe__social--icon">
           <i className="icon ion-logo-instagram"></i>
             </div>
             <div className="subscribe__social--icon">
           <i className="icon ion-logo-twitter"></i>
             </div>
           </div>
         </section> 
		)
}
export default Subscribe;