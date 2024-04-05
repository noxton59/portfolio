import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Contact() {
  const [info, setInfo] = useState({name: "", phone: "", company: "", email: ""});
  const [showWarning, setShowWarning] = useState(false);
  const [warningMsg, setWarningMsg] = useState(null);
  const regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  function sendEmail() {
    if (info.name === "" || info.phone === "" || info.company === "" || info.email === "") {
      setShowWarning(true);
      setWarningMsg("Fill all fields!");
    } else {
      if (regEx.test(info.email)) {
        setShowWarning(false);
        setWarningMsg(null);
        window.location.href = `mailto:noxton59@gmail.com?subject=FrontEnd%20developer&body=Name:%20${info.name},%20phone:%20${info.phone},%20company:%20${info.company},%20email:%20${info.email}`;
        setInfo({name: "", phone: "", company: "", email: ""});
      } else {
        setShowWarning(true);
        setWarningMsg("Enter valid email!");
      }
    }
  }
 
  return (
    <div className='contact-main'>
      <div id="contact"></div>
      <div className='contact-me-div'>Contact me</div>
      <div className='contact-wrapper'>
        <div className='contact-form'>
          <FloatingLabel
            controlId="name-id"
            label="Your Name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Your Name" value={info.name} onChange={(e)=>{setInfo({...info, name: e.target.value})}}/>
          </FloatingLabel>
          <FloatingLabel
            controlId="phone-id"
            label="Phone Number"
            className="mb-3"
          >
            <Form.Control type="number" placeholder="Phone Number" value={info.phone} onChange={(e)=>{setInfo({...info, phone: e.target.value})}}/>
          </FloatingLabel>
          <FloatingLabel
            controlId="company-id"
            label="Company name"
            className="mb-3"
          >
            <Form.Control type="text" placeholder="Company name" value={info.company} onChange={(e)=>{setInfo({...info, company: e.target.value})}}/>
          </FloatingLabel>
          <FloatingLabel
            controlId="email-id"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" value={info.email} onChange={(e)=>{setInfo({...info, email: e.target.value})}}/>
          </FloatingLabel>
        </div>
        <div className='contact-button-wrapper'>
          <button className='contact-me-button' onClick={sendEmail}>Contact me</button>
          <div className={`warning-div ${showWarning === true ? "" : "hidden"}`}>{warningMsg}</div>
        </div>
      </div>
    </div>
  )
}

export default Contact;