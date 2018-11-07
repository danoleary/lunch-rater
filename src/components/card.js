import React from 'react'
import 'bulma/css/bulma.css'
import { Link } from 'gatsby'

const Card = ({ id, date, organiser, establishment }) =>
  <div key={ id }>
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">{`${ date }: ${ organiser }`}</p>
      </header>
      <div className="card-content">
        <div className="content">{ establishment }</div>
      </div>
      <footer className="card-footer">
        <a href="#" className="card-footer-item">
          Rate
        </a>
        <Link className="card-footer-item" to="/editWeek/" state={{ id }}>
          Edit
        </Link>
        <a href="#" className="card-footer-item">
          Delete
        </a>
      </footer>
    </div>
    <br />
  </div>

export default Card
