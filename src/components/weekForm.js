import React from 'react'
import 'bulma/css/bulma.css'
import Layout from '../components/layout'
import Hero from '../components/hero'
import TextInput from '../components/textInput'
import DateInput from '../components/dateInput'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const WeekForm = props => (
  <div>
    <Hero title={props.title} />
    <Layout
      page={
        <form onSubmit={props.handleSubmit}>
          <TextInput
            label="Organiser"
            name="organiser"
            handleChange={props.handleChange}
            initialValue={props.organiser}
          />
          <TextInput
            label="Establishment name"
            name="establishment"
            handleChange={props.handleChange}
            initialValue={props.establishment}
          />
          <DateInput
            label="Date"
            name="date"
            handleChange={props.handleChange}
            initialValue={props.date}
          />
          <div className="field is-grouped">
            <div className="control">
              <button
                className="button is-link"
                disabled={!props.isValid()}
                type="submit"
              >
                Submit
              </button>
            </div>
            <div className="control">
              <Link className="button is-text" to="/">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      }
    />
  </div>
)

export default WeekForm

WeekForm.propTypes = {
  title: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  isValid: PropTypes.func,
  organiser: PropTypes.string,
  establishment: PropTypes.string,
  date: PropTypes.string
}
