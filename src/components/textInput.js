import React from 'react'

const TextInput = ({ label, name, handleChange, initialValue }) =>
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input
        className="input"
        name={name}
        type="text"
        onInput={handleChange}
        defaultValue={initialValue}
      />
    </div>
  </div>

export default TextInput
