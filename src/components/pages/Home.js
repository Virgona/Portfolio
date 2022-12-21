import React from 'react';
import './Home.css'
import ProfilePicture from '../../assets/me.jpg'

export default function Home() {

  return (

    <div>
      <h2 className='position'>About Me:</h2>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div className="card border-info mb-3 container-fluid">
              <div className="row g-0">
                <div className="col-md-3">
                  <img src={ProfilePicture} class="img-fluid rounded-start" alt="a handsome man" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">A little about me..</h5>
                    <p className="card-text"> Hello traveller, my name is Tobias Virgona. I am a 30 year old aspiring full-stack developer, podcast host, gamer and all round good dude.
                      I started learning some coding basics in 2021 and found myself falling in love, so in 2022 I signed up for a coding bootcamp to further hone some skills!

                      Film is my first love, I have studied Screen and Media at tafe which covered all sorts of filmmaking - writing scripts, cinematography, editing, practical effects and VFX.
                      If I am not expanding my coding brain I will usually be watching a movie and talking about it on my podcast <a target='blank' href='https://directory.libsyn.com/shows/view/id/forevermovieboys'>Forever Movie Boys</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};