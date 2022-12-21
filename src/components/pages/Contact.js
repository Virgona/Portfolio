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
  const [touched, setTouched] = useState(false);

  return (
    <div>
      <h2 className='headingPosition'>Contact Me:</h2>
      <div className="container">
        <div className="row">
          <div className="col-lg-">
            <div className="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" value={name} onChange={handleNameChange} onBlur={() => setTouched(true)} />
              <label for="floatingInput">Name</label>
              <div>
                {touched ? (isNameValid ? " " : "Name Required") : null}
              </div>
            </div>
            <div className="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={handleEmailChange} onBlur={() => setTouched(true)} />
              <label for="floatingInput">Email address</label>
              <div>
                {touched ? (isEmailValid ? " " : "Email Required") : null}
              </div>
            </div>
            <div className="form-floating">
              <textarea className="form-control textareaStyles" placeholder="Send me some good news!" id="floatingTextarea2" value={email} onChange={handleMessageChange} onBlur={() => setTouched(true)} ></textarea>
              <label for="floatingTextarea2">Tell me something good!</label>
              <div>
                {touched ? (isMessageValid ? " " : "Message Required") : null}
              </div>
              <button type="button" className="btn btn-outline-success">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
