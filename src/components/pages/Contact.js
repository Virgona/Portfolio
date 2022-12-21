import React, { useState } from 'react';
import './Contact.css'



export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleNameChange = evt => {
    setName(evt.target.value);
  };
  const handleEmailChange = evt => {
    setEmail(evt.target.value);
  };
  const handleMessageChange = evt => {
    setMessage(evt.target.value);
  };
  const isNameValid = name !== '';
  const isEmailValid = email !== '';
  const isMessageValid = message !== '';
  const [touchedName, setNameTouched] = useState(false);
  const [touchedEmail, setEmailTouched] = useState(false);
  const [touchedMessage, setMessageTouched] = useState(false);

  return (
    <div>
      <h2 className='headingPosition'>Contact Me:</h2>
      <div className="container form">
        <div className="row">
          <div className="col-lg-">
            <div className="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" value={name} onChange={handleNameChange} onBlur={() => setNameTouched(true)} />
              <label for="floatingInput">Name</label>
              <div className='alert'>
                {touchedName ? (isNameValid ? " " : "Name Required") : null}
              </div>
            </div>
            <div className="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={handleEmailChange} onBlur={() => setEmailTouched(true)} />
              <label for="floatingInput">Email address</label>
              <div className='alert'>
                {touchedEmail ? (isEmailValid ? " " : "Email Required") : null}
              </div>
            </div>
            <div className="form-floating">
              <textarea className="form-control" placeholder="Send me some good news!" id="floatingTextarea2" value={message} onChange={handleMessageChange} onBlur={() => setMessageTouched(true)} ></textarea>
              <label for="floatingTextarea2">Tell me something good!</label>
              <div className='alert'>
                {touchedMessage ? (isMessageValid ? " " : "Message Required") : null}
              </div>
              <button type="button" className="btn btn-outline-success">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
