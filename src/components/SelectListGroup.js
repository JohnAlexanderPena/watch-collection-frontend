import React from 'react';
import classnames from 'classnames'
// import PropTypes from 'prop-types';


const SelectListGroup = ({
  name,
  value,
  error,
  info,
  onChange,
  options
}) => {
  const selectOptions = options.map(opt => (
    <option key={opt.label} value={opt.value}>
      {opt.label}
    </option>
  ))

  return (
    <div className="form-group">
    <select
      className={classnames('form-control form-control-lg', {
        'is-invalid': error // will only appear and turn red IF errors.password2 exists in our state
      })}
      name={name}
      onChange={onChange}
      value={value}
      >
      {selectOptions}
      </select>
    {info && <small className="form-text text-muted">{info}</small>}
    {error && (<div className="invalid-feedback">{error}</div>)}
    </div>
  )
}

export default SelectListGroup
