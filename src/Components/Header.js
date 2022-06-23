
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { useHoverIntent } from 'react-use-hoverintent';




function Header() {

    const magnifyingGlass = <FontAwesomeIcon icon={faMagnifyingGlass} />
    const bell = <FontAwesomeIcon icon={faBell} />
    const caret = <FontAwesomeIcon icon={faCaretDown} />

    const [display, setDisplay] = useState('notdisplayed');
    const [isHovering, ref] = useHoverIntent({
        timeout: 100,
        sensitivity: 10,
        interval: 200,
      });

    const showButton = e => {
        e.preventDefault();
        setDisplay("displayed");
      };
    
      const hideButton = e => {
        e.preventDefault();
        setDisplay("notdisplayed");
      };

 


    return (
        <div className="header-container" onMouseLeave={e => hideButton(e)}>
            
            {/* Left side of nav bar */}
        
            <div className="left-header">
                
                <a href="/">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/netflix-logo.png`} className='logo' alt="Netflix"  />
                </a>
                
                <ul className='nav-container'>
                    
                    <li >
                        <a className="nav-btn home" href="/">Home</a>
                    </li>
                    
                    <li >
                        <a className="nav-btn" href="/">TV Shows</a>
                    </li>
                    
                    <li >
                        <a className="nav-btn" href="/">Movies</a>
                    </li>
                    
                    <li >
                        <a className="nav-btn" href="/">New & Popular</a>
                    </li>
                    
                    <li >
                        <a className="nav-btn" href="/">My List</a>
                    </li>


                </ul>

            
            {/* Right side of nav bar */}
            
            <div className="right-header">
                
                <ul className='nav-container'>
                    <li>
                        <a href="/" className='nav-btn right-btn glass'>{magnifyingGlass}</a>
                        
                       
                    </li>
                    <li>
                        <a href="/" className='nav-btn '>
                           <span className='dvd'>DVD</span> </a>
                    </li>
                    <li>
                        <a href="/" className='nav-btn right-btn bell'>{bell}</a>
                    </li>
                    <li>
                        
                        <a href="/" >
                            <img 
                            onMouseEnter={e => showButton(e)}
                            
                            className='profile-icon' 
                            src={`${process.env.PUBLIC_URL}/assets/images/blue-smiley.png`} 
                            alt="derp" 
                            />
                            <span  
                            onMouseEnter={e => showButton(e)}
                              
                            className='caret'>{caret}
                            </span>
                        </a>
                        
                        
                    </li>
                </ul>
           
            
            
            </div>

        
        </div>

          





        <div className={display} onMouseEnter={e => showButton(e)}
                            onMouseLeave={e => showButton(e)} >
            <ul className='popup-list' >
                <a className='profile-link' href="/">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blue-smiley.png`} alt="derp" className='profile-pic profile-icon' /><span>Profile 1</span>
                </a>
                <a href="/" className='profile-link'>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blue-smiley.png`} alt="derp" className='profile-pic profile-icon' /><span>Profile 2</span>
                </a>
                <a href="/" className='profile-link'>
                    <img src={`${process.env.PUBLIC_URL}/assets/images/blue-smiley.png`} alt="derp" className='profile-pic profile-icon' /><span>Profile 3</span>
                </a>
            </ul>
        </div>



    </div>
    )


}

export default Header;