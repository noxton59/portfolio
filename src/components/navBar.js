import { CgMenu } from "react-icons/cg";
import { useState, useRef, useEffect } from "react";

function NavBar({width}) {
  const [showMenu, setShowMenu] = useState(false);
  const navMenu = useRef(null);

  function showMenuFunction() {
    if (showMenu === false) {
      setShowMenu(true);
    } else if (showMenu === true) {
      document.querySelector(".opened-menu").classList.add("hide-menu");
      setTimeout(()=>{
        document.querySelector(".opened-menu").classList.remove("hide-menu");
        setShowMenu(false);
      }, 230);
    } 
    
  }

  function hideMenu(e) {
    if (showMenu && navMenu.current && !navMenu.current.contains(e.target)) {
      document.querySelector(".opened-menu").classList.add("hide-menu");
      setTimeout(()=>{
        document.querySelector(".opened-menu").classList.remove("hide-menu");
        setShowMenu(false);
      }, 230);
    }
  }
  useEffect(()=>{
    document.addEventListener("click", hideMenu);
    return (()=>{
      document.removeEventListener("click", hideMenu);
    })
  })

  if (width >= 992) {
    return (
      <div className="nav-bar-menu">
        <a className="nav-menu-link" href="#intro">Intro</a>
        <a className="nav-menu-link" href="#projects">Projects</a>
        <a className="nav-menu-link" href="#contact">Contact</a>
      </div>
    )
  } else if (width < 992) {
    return (
      <div className="nav-bar-menu">
        <div className="toggled-menu" onClick={showMenuFunction} ref={navMenu}>
          <CgMenu className="toggled-menu-icon"/>
          <div className={`opened-menu ${showMenu === true ? "" : "hidden"}`}>
            <a className="opened-menu-link" href="#intro">Intro</a>
            <a className="opened-menu-link" href="#projects">Projects</a>
            <a className="opened-menu-link" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    )
  }
  
}

export default NavBar;