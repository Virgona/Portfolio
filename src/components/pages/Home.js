import React from 'react';
import './Home.css'

export default function Home() {
  const styles = {
    card: {
      width: "max-width: 300px",
    }
  }
  return (

    <div>
      <h2 className='position'>About Me:</h2>
      <div class="card border-info mb-3" style={styles.card}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src="../public/me.jpg" class="img-fluid rounded-start" alt="a handsome man" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">A little about me..</h5>
              <p class="card-text"> Hello traveller, my name is Tobias. I am a 30 year old aspiring full-stack developer, podcast host, gamer and all round good dude.
                I started learning some coding basics in 2021 and found myself falling in love, so in 2022 I signed up for a coding bootcamp to further hone some skills!

                Film is my first love, I have studied Screen and Media at tafe which covered all sorts of filmmaking - writing scripts, cinematography, editing, practical effects and VFX.
                If I am not expanding my coding brain I will usually be watching a movie and talking about it on my podcast <a target='blank' href='https://directory.libsyn.com/shows/view/id/forevermovieboys'>Forever Movie Boys</a> -
                or you can find me playing League of Legends - like a disgustingly sweaty, sweater</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};