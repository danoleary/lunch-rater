import React from 'react'

const Hero = ({ title }) =>
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  </section>

export default Hero
