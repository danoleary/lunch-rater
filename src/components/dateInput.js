import React from 'react'

const DateInput = ({ label, name, handleChange, initialValue }) =>
  <div className="field">
    <label className="label">{label}</label>
    <div className="control">
      <input
        className="input"
        name={name}
        type="date"
        onInput={handleChange}
        defaultValue={initialValue}
      />
    </div>
  </div>

export default DateInput
