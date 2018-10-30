import React from 'react'
import { navigateTo } from 'gatsby-link'
import 'bulma/css/bulma.css'
import WeekForm from '../components/weekForm'

class EditWeek extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      organiser: null,
      establishment: null,
      date: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.isValid = this.isValid.bind(this)
  }

  componentDidMount () {
    fetch(
      `/.netlify/functions/lunch-get-single?id=${ this.props.location.state.id }`
    )
      .then(res => res.json())
      .then(
        result => {
          console.log(result)
          this.setState({
            organiser: result.organiser,
            establishment: result.establishment,
            date: result.date
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        this.setState({
          organiser: null,
          establishment: null,
          date: null
        })
      )
  }

  handleChange (event) {
    const target = event.target
    const name = target.name
    const type = target.type
    const value = type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  isValid () {
    return (
      this.state.organiser != null &&
      this.state.establishment != null &&
      this.state.date != null
    )
  }

  async handleSubmit (e) {
    e.preventDefault()
    const payload = Object.assign({}, this.state)
    payload['eventName'] = 'LunchAdded'
    const response = await fetch('/.netlify/functions/lunch-create', {
      body: JSON.stringify(payload),
      method: 'POST'
    })
    console.log(response.status)
    navigateTo('/')
  }

  render () {
    return (
      <WeekForm
        title='Edit week'
        handleSubmit={this.handleChange}
        handleChange={this.handleChange}
        organiser={this.state.organiser}
        establishment={this.state.establishment}
        date={this.state.date}
        isValid={this.isValid}
        submitText='Save' />
    )
  }
}

export default EditWeek
