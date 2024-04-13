import React from 'react'
import aboutimage from '../images/about.png'

function About() {
  return (
    <div  id='about'>
        <div className='about-img'>
        <img src={aboutimage}/>

        </div>
        <div className='about-text'>
            <h1>LEARN MORE ABOUT US </h1>
            <p>We are dedicated to transforming lives through fitness.
                 Our expert trainers, state-of-the-art equipment,
                  and supportive community empower you to reach your goals
                   and embrace a healthier lifestyle</p>
                <button>READ MORE</button>

        </div>

    </div>
  )
}

export default About
