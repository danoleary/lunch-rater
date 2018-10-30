import React from 'react'

const DateInput = props => (
  <div className="field">
    <label className="label">{props.label}</label>
    <div className="control">
      <input
        className="input"
        name={props.name}
        type="date"
        onInput={props.handleChange}
        defaultValue={props.initialValue}
      />
    </div>
  </div>
)

export default DateInput
