import { useState, useRef, useEffect } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


function Projects({width}) {
  const [index, setIndex] = useState(0);
  const [carousel1, setCarousel1] = useState(false);
  const [carousel2, setCarousel2] = useState(false);
  const [carousel3, setCarousel3] = useState(false);
  const [length, setLength] = useState(3);
  const [linkSite2, setLinkSite2] = useState(false);
  const [linkSite3, setLinkSite3] = useState(false);
  const note1 = useRef(null);
  const note2 = useRef(null)

  function showCarousel1() {
    setLength(3);
    setCarousel1(true);
    showSlides(index, ".slide-1", ".rectangle-1");
  }

  function showCarousel2() {
    setLength(3);
    setCarousel2(true);
    showSlides(index, ".slide-2", ".rectangle-2");
  }

  function showCarousel3() {
    setLength(7);
    setCarousel3(true);
    showSlides(index, ".slide-3", ".rectangle-3");
  }

  function closeCarousel() {
    setCarousel1(false);
    setCarousel2(false);
    setCarousel3(false);
    setIndex(0);
  }

  function clickOutSide1(e) {
    if (linkSite2 && note1.current && !note1.current.contains(e.target)) {
      document.querySelector(".note-wrapper-2").classList.add("fade-back");
      setTimeout(()=>{
        document.querySelector(".note-wrapper-2").classList.remove("fade-back");
        setLinkSite2(false);
      }, 400);
      
    }
  }
  function clickOutSide2(e) {
    if (linkSite3 && note2.current && !note2.current.contains(e.target)) {
      document.querySelector(".note-wrapper-3").classList.add("fade-back");
      setTimeout(()=>{
        document.querySelector(".note-wrapper-3").classList.remove("fade-back");
        setLinkSite3(false);
      }, 400)
    }
  }

  useEffect(()=>{
    window.addEventListener("click", clickOutSide1);
    window.addEventListener("click", clickOutSide2);
    return () => {
      window.removeEventListener("click", clickOutSide1);
      window.removeEventListener("click", clickOutSide2);
    }
  })

  function handlePrev(slide, rectangle) {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = length -1;
      setIndex(newIndex);
      showSlides(newIndex, slide, rectangle);
    } else {
      setIndex(newIndex);
      showSlides(newIndex, slide, rectangle);
    }
  }

  function handleNext(slide, rectangle) {
    let newIndex = index + 1;
    if (newIndex >= length) {
      newIndex = 0;
      setIndex(newIndex);
      showSlides(newIndex, slide, rectangle);
    } else {
      setIndex(newIndex);
      showSlides(newIndex, slide, rectangle);
    }
  }

  function showSlides(n, slide, rectangle) {
    let slides = document.querySelectorAll(slide);
    let rectangles = document.querySelectorAll(rectangle);
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }
    for (let i=0; i < rectangles.length; i++) {
      rectangles[i].classList.remove("active");
    }
    slides[n].classList.add("active")
    rectangles[n].classList.add("active"); 
  }

  function goToSite2() {
    setLinkSite2(true);
  }

  function goToSite3() {
    setLinkSite3(true);
  }

  let renderProjects;
  if (width >= 992) {
    renderProjects = 
      <div className="projects-wrapper">
        <div id="projects"></div>
        <div className="projects-list">
          <div className="project-1" onClick={showCarousel1}>
            <div>
              <img src={"./images/site1.1.jpg"} alt="site-1" className="site-image"></img>
            </div>
            <div className="site-description">1. HTML, CSS, Bootstrap.</div>
          </div>
          <div className="project-2" onClick={showCarousel2}>
            <div>
              <img src={"./images/site2.1.jpg"} alt="site-2" className="site-image"></img>
            </div>
            <div className="site-description">2. HTML, CSS, JS.</div>
          </div>
          <div className="project-3" onClick={showCarousel3}>
            <div>
              <img src={"./images/site3.1.jpg"} alt="site-3" className="site-image"></img>
            </div>
            <div className="site-description">3. HTML, CSS, JS, React.</div>
          </div>
        </div>
        <div className="col-8 align-self-center site-description-main">
          <ol>
            <li>The static site was created for informational purposes using Bootstrap.</li>
            <li>The site was created with embedded NeDB to track sports training with the ability to create new accounts and edit information if errors were made.</li>
            <li>The site was created with embedded NeDB to track daily lifestyle habits such as sleep, meals, steps, physical activity and stress. It shows recommendations based on your lifestyle. The site supports creating an account and changing daily activity information. </li>
          </ol>
        </div>
      </div>
  } else if (width < 992) {
    renderProjects = 
      <div className="projects-wrapper">
        <div id="projects"></div>
        <div className="projects-list">
          <div className="project-1" onClick={showCarousel1}>
            <div>
              <img src={"./images/site1.1.jpg"} alt="site-1" className="site-image"></img>
            </div>
            <div className="site-description">1. HTML, CSS, Bootstrap. The static site was created for informational purposes using Bootstrap.</div>
          </div>
          <div className="project-2" onClick={showCarousel2}>
            <div>
              <img src={"./images/site2.1.jpg"} alt="site-2" className="site-image"></img>
            </div>
            <div className="site-description">2. HTML, CSS, JS. The site was created to track sports training with the ability to create new accounts and edit information if errors were made.</div>
          </div>
          <div className="project-3" onClick={showCarousel3}>
            <div>
              <img src={"./images/site3.1.jpg"} alt="site-3" className="site-image"></img>
            </div>
            <div className="site-description">3. HTML, CSS, JS, React. The site is designed to track daily lifestyle habits such as sleep, meals, steps, physical activity and stress. It shows recommendations based on your lifestyle. The site supports creating an account and changing daily activity information.</div>
          </div>
        </div>
      </div>
  }

  return (
    <div className="projects-main">
      <div className={`slideshow-container ${carousel1 === true ? "" : "hidden"}`}>
        <div className="carousel-1">
          <div className="slide-1">
            <img src={'./images/site1.1.jpg'} className="slide-image-1"></img>
          </div>
          <div className="slide-1">
            <img src={'./images/site1.2.jpg'} className="slide-image-1"></img>
          </div>
          <div className="slide-1">
            <img src={'./images/site1.3.jpg'} className="slide-image-1"></img>
          </div>
          <a className="prev" onClick={()=>{handlePrev(".slide-1", ".rectangle-1")}}><FaArrowAltCircleLeft className="change-slide-icon"/></a>
          <a className="next" onClick={()=>{handleNext(".slide-1", ".rectangle-1")}}><FaArrowAltCircleRight className="change-slide-icon"/></a>
        </div>
        <div className="rectangle-wrapper">
          <div className="rectangle-1"></div>
          <div className="rectangle-1"></div>
          <div className="rectangle-1"></div>
        </div>
        <a href="https://save-forest.onrender.com/" target="_blank" className="link-to-website">Go to website</a>
        <button className="close-carousel-btn" onClick={closeCarousel}><IoClose className="close-icon"/></button>
      </div>
      <div className={`slideshow-container ${carousel2 === true ? "" : "hidden"}`}>
        <div className="carousel-2">
          <div className="slide-2">
            <img src={'./images/site2.1.jpg'} className="slide-image-1"></img>
          </div>
          <div className="slide-2">
            <img src={'./images/site2.2.jpg'} className="slide-image-1"></img>
          </div>
          <div className="slide-2">
            <img src={'./images/site2.3.jpg'} className="slide-image-1"></img>
          </div>
          <a className="prev" onClick={()=>{handlePrev(".slide-2", ".rectangle-2")}}><FaArrowAltCircleLeft className="change-slide-icon"/></a>
          <a className="next" onClick={()=>{handleNext(".slide-2", ".rectangle-2")}}><FaArrowAltCircleRight className="change-slide-icon"/></a>
        </div>
        <div className="rectangle-wrapper">
          <div className="rectangle-2"></div>
          <div className="rectangle-2"></div>
          <div className="rectangle-2"></div>
        </div>
        <div className="link-wrapper-2" ref={note1}>
          <button className="link-to-website" onClick={goToSite2}>Go to website</button>
          <div className={`note-wrapper-2 ${linkSite2 === true ? "" : "hidden"}`}>
            <div><span className="important-note">Important note!</span> The site is hosted on the free Glitch service, they put to sleep inactive applications, so the site may take up to 1 minute to load for the first time, be patient please.</div>
            <a href="https://tracksportroutine.glitch.me/" target="_blank" className="link-to-website">Go to site</a>
          </div>
        </div>
        <button className="close-carousel-btn" onClick={closeCarousel}><IoClose className="close-icon"/></button>
      </div>
      <div className={`slideshow-container ${carousel3 === true ? "" : "hidden"}`}>
        <div className="carousel-3">
          <div className="slide-3">
            <img src={'./images/site3.1.jpg'} className="slide-image-1"></img>
          </div>
          <div className="slide-3">
            <img src={'./images/site3.2.jpg'} className="slide-image-1"></img>
          </div>
          <div className="slide-3">
            <img src={'./images/site3.3.jpg'} className="slide-image-1"></img>
          </div>
          <div className="slide-3">
            <img src={'./images/site3.4.jpg'} className="slide-image-1"></img>
          </div>
          <div className="slide-3">
            <img src={'./images/site3.5.jpg'} className="slide-image-1"></img>
          </div>
          <div className="slide-3">
            <img src={'./images/site3.6.jpg'} className="slide-image-1"></img>
          </div>
          <div className="slide-3">
            <img src={'./images/site3.7.jpg'} className="slide-image-1"></img>
          </div>
          <a className="prev" onClick={()=>{handlePrev(".slide-3", ".rectangle-3")}}><FaArrowAltCircleLeft className="change-slide-icon"/></a>
          <a className="next" onClick={()=>{handleNext(".slide-3", ".rectangle-3")}}><FaArrowAltCircleRight className="change-slide-icon"/></a>
        </div>
        <div className="rectangle-wrapper">
          <div className="rectangle-3"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-3"></div>
        </div>
        <div className="link-wrapper-3" ref={note2}>
          <button className="link-to-website" onClick={goToSite3}>Go to website</button>
          <div className={`note-wrapper-3 ${linkSite3 === true ? "" : "hidden"}`}>
            <div><span className="important-note">Important note!</span> The site is hosted on the free Render service, they put to sleep inactive applications, so the site may take up to 1 minute to load for the first time, be patient please. And, site saves entered data only when it's active and haven't putted to sleep yet because of free service, in long run with proper hosting service site will preserve data forever.</div>
            <a href="https://healthcare-app-h4k0.onrender.com/" target="_blank" className="link-to-website">Go to site</a>
          </div>
        </div>
        <button className="close-carousel-btn" onClick={closeCarousel}><IoClose className="close-icon"/></button>
      </div>
      {renderProjects}
    </div>
  )
  
}

export default Projects;