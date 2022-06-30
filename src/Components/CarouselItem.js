import React, { useState } from 'react'

function CarouselItem(props) {
  
const [isSelected, setIsSelected] = useState(false);


if (isSelected) {
    return (
        <div className="content-item" id="selected-item" onMouseLeave={() => setTimeout(() => setIsSelected(false), 50)}>
                <img src={`${process.env.PUBLIC_URL}/assets/images/avengers-endgame.jpg`} alt="derp" className='content-image' />
        </div>
    )
}
  
  
  

  
return (
    <div className="content-item" onMouseEnter={() => setIsSelected(true)} >
        <img src={`${process.env.PUBLIC_URL}/assets/images/avengers-endgame.jpg`} alt="derp" className='content-image' />
    </div>
  )
}

export default CarouselItem