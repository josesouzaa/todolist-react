import React from 'react'
import './styles.css'

export function Switch({ isOn, handleToggle, handlePosition, isActive }) {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        onClick={handlePosition}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isActive && '#1d3557' }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  )
}
