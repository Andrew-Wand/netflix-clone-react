import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

function Main() {
    

    const playBtn = <FontAwesomeIcon icon={faPlay} />
    const circleInfo = <FontAwesomeIcon icon={faCircleInfo} />





    return (
        <div className="main-container">
            <div className="movie-container">
                <img src={`${process.env.PUBLIC_URL}/assets/images/avengers-endgame.jpg`} alt="end game!" className="movie-img" />
            </div>

            <div className="movie-info">
                
                <div>
                    <img className="movie-logo" src={`${process.env.PUBLIC_URL}/assets/images/avengers-logo.png`} alt="" />
                </div>

                <div className='movie-synopsis'>
                    <span>After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.</span>
                </div>


                <div className="main-btns">
                    <div>
                        <button className="main-play">
                            <i className='play-icon'>{playBtn}</i>
                            <span>Play</span>
                        </button>
                        <button className="more-info">
                            <i className='play-icon'>{circleInfo}</i>
                            <span>More info</span>
                        </button>
                    </div>

                    <div className="main-more-info">

                    </div>
                </div>

                
            </div>


                 
        </div>
        
           

               
            
               
            

            
            
       
       
      
    )

}

export default Main;
