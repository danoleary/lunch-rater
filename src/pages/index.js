import React from 'react'
import 'bulma/css/bulma.css'
import Layout from '../components/layout'
import Table from '../components/table'
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
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        this.setState({
          rota: []
        })
      )
  }

  render () {
    return (
      <div>
        <Hero title={'Lunch rater!'} />
        <Layout
          page={
            <div className="columns">
              <div className="column" />
              <div className="column is-one-half">
                <Table
                  rows={this.state.rota}
                  headers={['Date', 'Organiser', 'Establishment', '', '&nbsp;']}
                />
                <Link className="button is-large is-success" to="/newWeek/">
                  Add new week!
                </Link>
              </div>
              <div className="column" />
            </div>
          }
        />
      </div>
    )
  }
}

export default IndexPage
