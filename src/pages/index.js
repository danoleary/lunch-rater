import React from 'react'
import 'bulma/css/bulma.css'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Card from '../components/card'
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
          const rota = result.map(x => JSON.parse(x))
          const sortedRota = rota.slice().sort(function (a, b) {
            return new Date(b.date).getTime() - new Date(a.date).getTime()
          })
          this.setState({
            rota: sortedRota
          })
        },
        this.setState({
          rota: []
        })
      )
  }

  render () {
    const cards = this.state.rota.map(x =>
      <Card key={x.id} id={x.id} date={x.date} organiser={x.organiser} establishment={x.establishment} />)
    return (
      <div>
        <Hero title={'Lunch rater!'} />
        <Link className="button is-success" to="/newWeek/">
          Add new week!
        </Link>
        <Layout page={cards} />
      </div>
    )
  }
}

export default IndexPage
