import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons'




function Header() {

    const magnifyingGlass = <FontAwesomeIcon icon={faMagnifyingGlass} />
    const bell = <FontAwesomeIcon icon={faBell} />

 


    return (
        <div className="header-container">
            
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
                        <a href="/" className='nav-btn'>DVD</a>
                    </li>
                    <li>
                        <a href="/" className='nav-btn right-btn'>{bell}</a>
                    </li>
                    <li>
                        <img src="" alt="derp" />
                    </li>
                </ul>
           
            
            
            </div>

        
        </div>

          


    </div>
    )


}

export default Header;