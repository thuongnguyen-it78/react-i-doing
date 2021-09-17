import React from 'react'
import PropTypes from 'prop-types'
import './MoleList.scss'
import Mole from '../Mole/Mole'

MoleList.propTypes = {}

function MoleList({ onWhack }) {
  return (
    <div className="moles">
      {new Array(5).fill().map((_, id) => (
        <Mole key={id} onWhack={onWhack} />
      ))}
    </div>
  )
}

export default MoleList
