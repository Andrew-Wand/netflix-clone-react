import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import  CarouselItem  from "../Components/CarouselItem";




function Carousel(props, {items}) {
  

  
  const arrowLeft = <FontAwesomeIcon icon={faChevronLeft} />
  const arrowRight = <FontAwesomeIcon icon={faChevronRight} />

  const [scrollX, setScrollX] = useState(0);

 const handleLeftArrow = () => {
  let x = scrollX + Math.round(window.innerWidth / 2);
  if (x > 0) {
     x = 0;
  }
    setScrollX(x);
 }

 const handleRightArrow = () => {
  let x = scrollX - Math.round(window.innerWidth / 2);
  let listW = {CarouselItem}.length * 150;
  if((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60
  }
  setScrollX(x);
 }
  
  
  
  
  
return (
    <div className="carousel-wrapper">
      <h1 className="item-title">Derp!</h1>
        <div className="carousel-strip" style={{marginLeft: scrollX}} >
            
            <div className="arrow-left" id='arrow-left' onClick={handleLeftArrow}>
              <i>{arrowLeft}</i>
            </div>

            <div className="arrow-right" onClick={handleRightArrow} >
              <i >{arrowRight}</i>
            </div>
            <div className="item-content" >{props.children}</div>
        </div>
      </div>
  )
}

export default Carousel