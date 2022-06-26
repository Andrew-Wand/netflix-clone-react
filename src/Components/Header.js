
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell, faCaretDown, faPen, faUser, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'





function Header() {

    const magnifyingGlass = <FontAwesomeIcon icon={faMagnifyingGlass} />
    const bell = <FontAwesomeIcon icon={faBell} />
    const caret = <FontAwesomeIcon icon={faCaretDown} />
    const pencil = <FontAwesomeIcon icon={faPen} />
    const userIcon = <FontAwesomeIcon icon={faUser} />
    const circleQuestion = <FontAwesomeIcon icon={faCircleQuestion} />
    


    const [display, setDisplay] = useState('notdisplayed');

    const caretObj = document.getElementById('caret');
    
  
    // Show/Hide header popup
    const showButton = e => {
        e.preventDefault();
        setDisplay("displayed");
        caretObj.classList.add('caretUp');
        caretObj.classList.remove('caretDown');
      };
    
      const hideButton = e => {
        e.preventDefault();
        setDisplay("notdisplayed");
        caretObj.classList.remove('caretUp');
        caretObj.classList.add('caretDown');
      };



      
      
     useEffect(() => {
        document.addEventListener('scroll', () => {
            let header = document.getElementById('header-container');
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        })
     })

 


    return (
        
        <div className="header-container" id='header-container' onMouseLeave={e => hideButton(e)}>
            
            {/* Left side of nav bar */}
        
            <div className="left-header">
                
                <a href="/">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/netflix-logo.png`} className='logo' alt="Netflix"  />
                </a>
                
                <ul className='nav-container left-nav'>
                    
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
                              
                            className='caret' id='caret'>{caret}
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
                    <img src={`${process.env.PUBLIC_URL}/assets/images/yellow-smiley.jpg`} alt="derp" className='profile-pic profile-icon' /><span>Profile 2</span>
                </a>
                <a href="/" className='profile-link'>
                    {/* <img src={pencil} alt="derp" className='profile-pic profile-icon' /> */}
                    <i className='profile-pic profile-icon pencil'> {pencil }</i> <span>Manage Profiles </span> 
                   
                </a>

                <br />
                <div className='account-container'>
                <a className='profile-link' href="/">
                    <i className='profile-pic profile-icon pencil'> {userIcon }</i><span>Account</span>
                </a>
                <a className='profile-link' href="/">
                    <i className='profile-pic profile-icon pencil'> {circleQuestion }</i><span>Account</span>
                </a>
                </div>

                <a className='profile-link' href="/">
                    <span className='sign-out'>Sign out of Netflix</span>
                </a>
               
            </ul>
        </div>



    </div>
    )


}

export default Header;