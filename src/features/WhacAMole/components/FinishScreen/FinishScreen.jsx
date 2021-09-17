import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import Splitting from 'splitting'

import './FinishScreen.scss'

FinishScreen.propTypes = {
  newHigh: PropTypes.bool.isRequired,
  onRestart: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  result: PropTypes.number.isRequired,
}

function FinishScreen({ newHigh, onRestart, onReset, result }) {
  return (
    <div className="info-screen">
      <div className="results">
        {newHigh && (
          <Fragment>
            <h2
              className="celebration"
              dangerouslySetInnerHTML={{
                __html: Splitting.html({ content: `New High Score!` }),
              }}
            />

            <h2 className="celebration">{result}</h2>
          </Fragment>
        )}
        {!newHigh && <h2 className="info__text boring-text">{`You Scored ${result}`}</h2>}
      </div>
      <button onClick={onRestart}>Play Again</button>
      <button onClick={onReset}>Main Menu</button>
    </div>
  )
}

export default FinishScreen
