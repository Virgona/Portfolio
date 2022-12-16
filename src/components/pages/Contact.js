import React from 'react';

export default function Contact() {
  const styles = {
    textArea: {
      height: '100px'
    }
  }

  return (
    <div>
      <h1>Contact Me</h1>
      <p>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={styles.textArea}></textarea>
        <label for="floatingTextarea2">Comments</label>
      </div>
      </p>
    </div>
  );
}
