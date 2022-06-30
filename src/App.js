import './App.css';
import Header from './Components/Header';
import Main from './Components/Main'
import Carousel from "./Components/Carousel";
import CarouselItem from './Components/CarouselItem'
import Footer from './Components/Footer';


function App() {
  return (
    
    <div className="App">
      <Header />
      <Main />
      
      <div className="carousel-one">
      <Carousel >
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
      <Carousel >
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
      <div className="carousel-three">
      <Carousel >
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
