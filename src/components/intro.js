import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { PiArrowFatLinesDownBold } from "react-icons/pi";

function Intro({width}) {
  if (width >= 992) {
    return (
      <div className="intro-main">
        <div id="intro"></div>
        <Container>
          <Row>
            <Col className="description" lg={8}>
              <Row>
                Hello, my name is Anton Zhdanov, I graduated from the Perm State Agricultural Technical University with a bachelor degree in mechanical engineering, but I decided to change my field of activity. Now I am working as system administrator and started studying HTML, CSS, JavaScript, React, Bootstrap and these are my projects:
              </Row>
              <Row className="projects-link-wrapper">
                <a href="#projects" className="projects-arrow"><PiArrowFatLinesDownBold className="project-icon"/></a>
              </Row>
            </Col>
            <Col lg={4} className="photo-wrapper">
              <img src={"./photo.jpg"} alt="profile" className="photo-image"></img>
            </Col>
          </Row>
        </Container>
      </div>
    )
  } else if (width < 992) {
    return (
      <div className="intro-main">
        <div id="intro"></div>
        <Container>
          <Row className="description">
            Hello, my name is Anton Zhdanov, I graduated from the Perm State Agricultural Technical University with a bachelor degree in mechanical engineering, but I decided to change my field of activity. Now I am working as system administrator and started studying HTML, CSS, JavaScript, React, Bootstrap and these are my projects:
          </Row>
          <Col className="photo-wrapper mt-5">
            <img src={"/photo.jpg"} alt="profile" className="photo-image"></img>
          </Col>
          <Row className="projects-link-wrapper mt-3">
            <a href="#projects" className="projects-arrow"><PiArrowFatLinesDownBold className="project-icon"/></a>
          </Row>
        </Container>
      </div>
    )
  }

}

export default Intro;
