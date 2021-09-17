import PropTypes from 'prop-types'
import React from 'react'
import './StartScreen.scss'

StartScreen.propTypes = {
  onStart: PropTypes.func.isRequired,
}

function StartScreen({ onStart }) {
  return (
    <div className="info-screen">
      <h1 className="title">
        <span>Whac</span>
        <span>a</span>
        <span>Mole</span>
      </h1>
      <button onClick={onStart}>Start Game</button>
    </div>
  )
}

export default StartScreen
