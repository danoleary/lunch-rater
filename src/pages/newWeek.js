import React from 'react'
import { navigateTo } from 'gatsby-link';
import 'bulma/css/bulma.css'
import Layout from '../components/layout'
import Hero from '../components/hero'
import TextInput from '../components/textInput'
import DateInput from '../components/dateInput'
import { Link } from 'gatsby'

class NewWeek extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            organiser: null,
            establishment: null,
            date: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.isValid = this.isValid.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const type = target.type;
        const value = type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    isValid() {
        return this.state.organiser != null &&
            this.state.establishment != null && this.state.date != null
    }

    async handleSubmit(e) {
        e.preventDefault();
        const response = await fetch('/.netlify/functions/lunch-create', {
            body: JSON.stringify(this.state),
            method: 'POST'
        })
        console.log(response.status);
        navigateTo("/");
    }

    render() {
        return (
            <div>
                <Hero title='Add a new week' />
                <Layout page={
                    <form onSubmit={this.handleSubmit}>
                        <TextInput label='Organiser' name='organiser'
                            handleChange={this.handleChange} />
                        <TextInput label='Establishment name' name='establishment'
                            handleChange={this.handleChange} />
                        <DateInput label='Date' name='date'
                            handleChange={this.handleChange} />
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link"
                                    disabled={!this.isValid()}
                                    type="submit">Submit</button>
                            </div>
                            <div className="control">
                                <Link className="button is-text"
                                    to="/">
                                    Cancel
                                </Link>
                            </div>
                        </div>
                    </form>
                }></Layout>
            </div>
        )
    }
}

export default NewWeek
