import React from 'react';
import './Projects.css'
// importing images and assigning them variables
import whatsOn from "../../assets/Whats-on.png"
import fwends from "../../assets/music-fwends.jpg"
import jate from "../../assets/JATE.png"
import wds from "../../assets/wds.png"
import weather from "../../assets/weather.png"
import password from "../../assets/Password-Generator.png"
export default function Projects() {

  return (
    < div >
      <h2 className='title'>Projects:</h2>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div class="card border-info mb-3 mx-auto align-items-center">
              <img src={whatsOn} class="card-img-top" alt="movie application" />
              <div class="card-body">
                <h5 class="card-title">What's On</h5>
                <p class="card-text">A movie curation application where 20 films are suggested for you to watch determined by your choice of genre.</p>
                <a href="https://virgona.github.io/Whats-on/" target='blank' class="btn btn-primary">View App</a>
                <a href="https://github.com/Virgona/Whats-on.git" target='blank' className="btn btn-primary">Repo</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-danger mb-3 mx-auto align-items-center">
              <img src={fwends} class="card-img-top" alt="fourm application" />
              <div class="card-body">
                <h5 class="card-title">Music Fwends</h5>
                <p class="card-text">A fourm where music lovers can get together and post to the fourm and chat.</p>
                <a href="https://music-fwends-v2.herokuapp.com/" class="btn btn-primary">View Fourm</a>
                <a href="https://github.com/Virgona/Music-Fwends.git" target='blank' className="btn btn-primary">Repo</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-info mb-3 mx-auto align-items-center">
              <img src={weather} class="card-img-top" alt="weather app" />
              <div class="card-body">
                <h5 class="card-title">Weather App</h5>
                <p class="card-text">A basic weather application where you can get the weather for a certain location and the conditions for the next 5 days.</p>
                <a href="https://virgona.github.io/weather-app/" target="blank" class="btn btn-primary">Check Weather</a>
                <a href="https://github.com/Virgona/weather-app" target='blank' className="btn btn-primary">Repo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container text-center" id='container2'>
        <div class="row">
          <div class="col">
            <div class="card border-danger mb-3 mx-auto align-items-center">
              <img src={wds} class="card-img-top" alt="note taker" />
              <div class="card-body">
                <h5 class="card-title">Work Day Scheduler</h5>
                <p class="card-text">An app where you can keep track of your daily tasks!</p>
                <a href="https://virgona.github.io/Work-Day-Scheduler/" class="btn btn-primary">Get Organized</a>
                <a href="https://github.com/Virgona/Work-Day-Scheduler" target='blank' className="btn btn-primary">Repo</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-info mb-3 mx-auto align-items-center">
              <img src={jate} class="card-img-top" alt="text editor app" />
              <div class="card-body">
                <h5 class="card-title">JATE</h5>
                <p class="card-text">A classic text editor. Web-based though can be installed locally.</p>
                <a href="https://jate-the-pwa-text-editor.herokuapp.com/" target='blank' class="btn btn-primary">Get JATE</a>
                <a href="https://github.com/Virgona/PWA-Text-Editor" target='blank' className="btn btn-primary">Repo</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card border-danger mb-3 mx-auto align-items-center">
              <img src={password} class="card-img-top" alt="password generator" />
              <div class="card-body">
                <h5 class="card-title">Password Generator</h5>
                <p class="card-text">Creates a unique and strong password for a user.</p>
                <a href="https://virgona.github.io/Password-Generator/" target='blank' class="btn btn-primary">Password?</a>
                <a href="https://github.com/Virgona/Password-Generator.git" target='blank' className="btn btn-primary">Repo</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
