import React from 'react';
import './Projects.css'
export default function Projects() {
  const style = {
    width: '18rem'
  }
  return (
    < div >
      <h2 className='title'>Projects:</h2>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div class="card" style={style}>
              <img src="../public/whats-on.png" class="card-img-top" alt="movie application" />
              <div class="card-body">
                <h5 class="card-title">What's On</h5>
                <p class="card-text">A movie curation application where 20 films are suggested for you to watch determined by your choice of genre.</p>
                <a href="https://virgona.github.io/Whats-on/" target='blank' class="btn btn-primary">View App</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={style}>
              <img src="..." class="card-img-top" alt="fourm application" />
              <div class="card-body">
                <h5 class="card-title">Music Fwends</h5>
                <p class="card-text">A fourm where music lovers can get together and post to the fourm and chat.</p>
                <a href="https://music-fwends-v2.herokuapp.com/" class="btn btn-primary">View Fourm</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={style}>
              <img src="..." class="card-img-top" alt="weather app" />
              <div class="card-body">
                <h5 class="card-title">Weather App</h5>
                <p class="card-text">A basic weather application where you can get the weather for a certain location and the conditions for the next 5 days.</p>
                <a href="https://virgona.github.io/weather-app/" target="blank" class="btn btn-primary">Check Weather</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container text-center" id='container2'>
        <div class="row">
          <div class="col">
            <div class="card" style={style}>
              <img src="..." class="card-img-top" alt="note taker" />
              <div class="card-body">
                <h5 class="card-title">Note Taker</h5>
                <p class="card-text">An app where you can keep notes and keep track of notes!</p>
                <a href="https://tobys-note-taker.herokuapp.com/" class="btn btn-primary">Get Organized</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={style}>
              <img src="..." class="card-img-top" alt="text editor app" />
              <div class="card-body">
                <h5 class="card-title">JATE</h5>
                <p class="card-text">A classic text editor. Web-based though can be installed locally.</p>
                <a href="https://jate-the-pwa-text-editor.herokuapp.com/" target='blank' class="btn btn-primary">Get JATE</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={style}>
              <img src="..." class="card-img-top" alt="password generator" />
              <div class="card-body">
                <h5 class="card-title">Password Generator</h5>
                <p class="card-text">Creates a unique and strong password for a user.</p>
                <a href="https://virgona.github.io/Password-Generator/" target='blank' class="btn btn-primary">Password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
