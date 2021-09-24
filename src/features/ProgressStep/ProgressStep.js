import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './ProgressStep.scss'

const step = 5
const stepArr = []
for (let i = 1; i <= step; i++) {
  stepArr.push(i)
}

function ProgressStep(props) {
  const [currentIndex, setCurrentIndex] = useState(1)

  const handleButtonClick = (type) => {
    if (type === 'prev' && currentIndex !== 1) {
      setCurrentIndex(currentIndex - 1)
    }

    if (type === 'next' && currentIndex !== step) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <div className="progress-steps">
      <div>
        <div className="progress-container" style={{ width: `${step * 90}px` }}>
          <div className="progress" style={{ width: `${((currentIndex - 1) / (step - 1)) * 100}%` }}></div>
          {stepArr.map((step, index) => (
            <div
              className={classnames('circle', {
                'circle--active': step <= currentIndex,
              })}
              key={index}
            >
              {step}
            </div>
          ))}
        </div>
        <button onClick={() => handleButtonClick('prev')} className="progress-steps__btn" disabled={currentIndex === 1}>
          Prev
        </button>
        <button
          onClick={() => handleButtonClick('next')}
          className="progress-steps__btn"
          disabled={currentIndex === step}
        >
          Next
        </button>
      </div>
    </div>
  )
}

ProgressStep.propTypes = {}

export default ProgressStep
