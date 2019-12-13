import React from 'react'
import Slider from './mainPage/slider';
import Categories from './mainPage/categories';
import Gallery from './mainPage/gallery';
import Benefits from './mainPage/benefits'
import Subscribe from './mainPage/subscribe';
import Presentaion from './mainPage/presentation'
import Gallery2 from './mainPage/gallery2'
const App=(props)=> {  
  
   return (
        <div>
            <Slider />
            <Categories />
            <Gallery />
            <Benefits />
            <Presentaion />
            <Gallery2 />
            <Subscribe />
        </div>
    )
  
}


export default App;
