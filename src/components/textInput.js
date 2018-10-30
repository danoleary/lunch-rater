import React from 'react'

const TextInput = props => (
  <div className="field">
    <label className="label">{props.label}</label>
    <div className="control">
      <input
        className="input"
        name={props.name}
        type="text"
        onInput={props.handleChange}
        defaultValue={props.initialValue}
      />
    </div>
  </div>
)

export default TextInput
