import React from 'react'
import 'bulma/css/bulma.css'
import Layout from '../components/layout'
import Hero from '../components/hero'
import { Link } from 'gatsby'
import fetch from 'isomorphic-fetch'

class IndexPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      rota: []
    }
  }

  componentDidMount () {
    fetch('/.netlify/functions/lunch-get-all')
      .then(res => res.json())
      .then(
        result => {
          console.log(result)
          this.setState({
            rota: result.map(x => JSON.parse(x))
          })
        },
        this.setState({
          rota: []
        })
      )
  }

  mapRotaToCards (rota) {
    return rota.map(x => (
      <div key={x.id}>
        <div className="card" >
          <header className="card-header">
            <p className="card-header-title">{`${ x.date }: ${ x.organiser }`}</p>
          </header>
          <div className="card-content">
            <div className="content">{x.establishment}</div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">
              Rate
            </a>
            <Link
              className="card-footer-item"
              to="/editWeek/"
              state={{ id: x.id }}
            >
              Edit
            </Link>
            <a href="#" className="card-footer-item">
              Delete
            </a>
          </footer>
        </div>
        <br />
      </div>
    ))
  }

  render () {
    return (
      <div>
        <Hero title={'Lunch rater!'} />
        <Link className="button is-success" to="/newWeek/">
          Add new week!
        </Link>
        <Layout page={this.mapRotaToCards(this.state.rota)} />
      </div>
    )
  }
}

export default IndexPage
