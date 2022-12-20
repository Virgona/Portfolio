import React from 'react';
import './Contact.css'

export default function Contact() {

  return (
    <div>
      <h1>Contact Me</h1>
      <div class="container">
        <div class="row">
          <div class="col-lg-">
            <div className="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <textarea class="form-control textareaStyles" placeholder="Send me some good news!" id="floatingTextarea2"></textarea>
              <label for="floatingTextarea2">Tell me something good!</label>
              <button type="button" class="btn btn-outline-success">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
