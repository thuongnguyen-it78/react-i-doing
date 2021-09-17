import PropTypes from 'prop-types'
import React from 'react'
import './HighScore.scss'

HighScore.propTypes = {
  value: PropTypes.number.isRequired,
}

function HighScore({ value }) {
  return <span className="hiscore info__text">{`Hi Score: ${value}`}</span>
}

export default HighScore
