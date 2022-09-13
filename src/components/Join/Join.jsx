import React, {useRef} from 'react'
import "./Join.css"
import emailjs from '@emailjs/browser'

const Join = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_p3wcndc', 'template_uus3y6o', form.current, 'RHRENQQogH26mUykX')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className="Join" id="join-now">
        <div className="left-join">
            <hr />
            <div>
                <span className='transparent-text' >WE ARE</span>
                <span >WAITING FOR</span>
            </div>
            <div>
                <span>YOU TO</span>
                <span className='transparent-text'>JOIN US</span>
            </div>
        </div>
        <div className="right-join">
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='enter your email' />
                <button className='btn btn-join'>join now</button>
            </form>
        </div>
    </div>
  )
}

export default Join