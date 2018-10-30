import React from 'react'

const Hero = props => (
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{props.title}</h1>
      </div>
    </div>
  </section>
)

export default Hero
