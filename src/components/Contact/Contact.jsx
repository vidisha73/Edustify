import React from 'react'
import "./Contact.css"
import msg from "../../assets/msg-icon.png"
import mail from "../../assets/mail-icon.png"
import phone from "../../assets/phone-icon.png"
import location from "../../assets/location-icon.png"
import arrow from "../../assets/white-arrow.png"

export default function Contact() {

    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ed814090-0ad4-4420-ac92-70e360e1c974");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Message Sent Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };





  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg} alt="" /> </h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li> <img src={mail} alt="" />  vidisha.gaut@gmail.com</li>
                <li> <img src={phone} alt="" />2412221</li>
                <li> <img src={location} alt="" />  77 Massachusetts Ave, Cambridge
                MA 02139, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" placeholder="Enter Your Name" id="name" required/>

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter Your Mobile" id="phone" maxLength="10"
                minLength="10" required/>
                
                <label htmlFor="message">Your Message</label>
                <textarea name="message" id="message" placeholder="Enter your message" rows="6" ></textarea>
                <button type="submit" className='btn dark-btn'>Submit Now <img src={arrow} alt="" /> </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}
