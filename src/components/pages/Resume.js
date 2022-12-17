import React from 'react';
import './Resume.css';

export default function Resume() {
  return (
    <div>
      <h2 className='title'>Resume:</h2>
      <div class="card">
        <div class="card-body">
          <p>
            Click the button to download my resume!
          </p>
          <a href="#" class="btn btn-primary">Download Me!</a>
        </div>
      </div>
    </div>
  );
}
