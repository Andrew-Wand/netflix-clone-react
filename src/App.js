import './App.css';
import Header from './Components/Header';
import Main from './Components/Main'
import Carousel from "./Components/Carousel";
import CarouselItem from './Components/CarouselItem'
import Footer from './Components/Footer';
import data from './Data/movies.jsx'
import { useState } from 'react';



function App() {


  


  return (
    
    <div className="App">
      <Header />
      <Main />
      
      <div className="carousel-one">
      <Carousel carouselTitle="Continue Watching" >
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
      </Carousel>
      </div>
      <div className="carousel-two">
      <Carousel carouselTitle="What's New" >
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
      </Carousel>
      </div>
      <div className="carousel-three" >
      <Carousel carouselTitle="Your Favorites" >
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
        <CarouselItem  />
      </Carousel>
      </div>
    <Footer />
      
    </div>



  )
}

export default App;
