import './App.css';
import Header from './Components/Header';
import Main from './Components/Main'
import Carousel from "./Components/Carousel";
import CarouselItem from './Components/CarouselItem'
import Footer from './Components/Footer';

import { useState } from 'react';



function App() {


  


  return (
    
    <div className="App">
      <Header />
      <Main />
      
<div className="carousel-container">
  <div className="carousel-one">
      <Carousel carouselTitle="Continue Watching" >
        <CarouselItem img='assets/images/movies/breaking-bad.jpg' />
        <CarouselItem  img='assets/images/movies/constantine.jpg' />
        <CarouselItem   img='assets/images/movies/orange-new.jpg'/>
        <CarouselItem   img='assets/images/movies/spartacus.jpg'/>
        <CarouselItem  img='assets/images/movies/fma.jpg'/>
        <CarouselItem  img='assets/images/movies/ahs.jpeg'/>
        <CarouselItem  img='assets/images/movies/fandf.jpg'/>
        <CarouselItem  img='assets/images/movies/ghostbusters.jpg'/>
        <CarouselItem  img='assets/images/movies/jaws.jpg'/>
        <CarouselItem  img='assets/images/movies/ice-age.jpg'/>
        <CarouselItem  img='assets/images/movies/orange-new.jpg'/>
        <CarouselItem  img='assets/images/movies/orange-new.jpg'/>
      </Carousel>
      </div>
      <div className="carousel-two">
      <Carousel carouselTitle="What's New" >
        <CarouselItem img='assets/images/movies/constantine.jpg' />
        <CarouselItem  img='assets/images/movies/breaking-bad.jpg' />
        <CarouselItem   img='assets/images/movies/ghostbusters.jpg'/>
        <CarouselItem   img='assets/images/movies/ice-age.jpg'/>
        <CarouselItem  img='assets/images/movies/fma.jpg'/>
        <CarouselItem  img='assets/images/movies/ahs.jpeg'/>
        <CarouselItem  img='assets/images/movies/jaws.jpg'/>
        <CarouselItem  img='assets/images/movies/spartacus.jpg'/>
        <CarouselItem  img='assets/images/movies/fandf.jpg'/>
        <CarouselItem  img='assets/images/movies/orange-new.jpg'/>
        <CarouselItem  img='assets/images/movies/orange-new.jpg'/>
        <CarouselItem  img='assets/images/movies/orange-new.jpg'/>
      </Carousel>
      </div>
      <div className="carousel-three" >
      <Carousel carouselTitle="Your Favorites" >
      <CarouselItem img='assets/images/movies/ice-age.jpg' />
        <CarouselItem  img='assets/images/movies/constantine.jpg' />
        <CarouselItem   img='assets/images/movies/spartacus.jpg'/>
        <CarouselItem   img='assets/images/movies/orange-new.jpg'/>
        <CarouselItem  img='assets/images/movies/fma.jpg'/>
        <CarouselItem  img='assets/images/movies/fandf.jpg'/>
        <CarouselItem  img='assets/images/movies/jaws.jpg'/>
        <CarouselItem  img='assets/images/movies/ghostbusters.jpg'/>
        <CarouselItem  img='assets/images/movies/ahs.jpeg'/>
        <CarouselItem  img='assets/images/movies/breaking-bad.jpg'/>
        <CarouselItem  img='assets/images/movies/orange-new.jpg'/>
        <CarouselItem  img='assets/images/movies/orange-new.jpg'/>
      </Carousel>
      </div>
</div>

 
    <Footer />
    
    
    
      
    </div>



  )
}

export default App;
