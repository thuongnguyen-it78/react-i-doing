import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './ExpandingCard.scss'
const defaultCards = [
  {
    id: 1,
    URL: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80',
    name: 'Andres Nguyen',
    status: 1,
  },
  {
    id: 2,
    URL: 'https://images.unsplash.com/photo-1632341111880-8fc242477b57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    name: 'thuongnguyen.it78',
    status: 0,
  },
  {
    id: 3,
    URL: 'https://images.unsplash.com/photo-1632332811879-2fdbb98e7b02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    name: 'NLU University',
    status: 0,
  },
  {
    id: 4,
    URL: 'https://images.unsplash.com/photo-1632348172943-1842f12b44fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    name: 'React I Doing',
    status: 0,
  },
  {
    id: 5,
    URL: 'https://images.unsplash.com/photo-1628191137573-dee64e727614?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
    name: 'Front-end Developer',
    status: 0,
  },
]
const localStorageKey = 'expanding-card'

function ExpandingCard(props) {
  const [cards, setCards] = useState(() => {
    const cards = JSON.parse(localStorage.getItem(localStorageKey)) || defaultCards
    return cards
  })

  const handlePanelClick = (id) => {
    // delete status is 1
    // set status 1 for the product click
    // save localStorage

    const newCards = cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          status: 1,
        }
      } else {
        return {
          ...card,
          status: 0,
        }
      }
    })

    setCards(newCards)
    localStorage.setItem(localStorageKey, JSON.stringify(newCards))
  }

  return (
    <div className="expanding-card">
      {cards.map((card) => (
        <div
          key={card.id}
          className={classnames('expanding-card__panel', {
            'expanding-card__panel--active': card.status === 1,
          })}
          style={{
            backgroundImage: `URL('${card.URL}')`,
          }}
          onClick={() => handlePanelClick(card.id)}
        >
          <h3>{card.name}</h3>
        </div>
      ))}
    </div>
  )
}

ExpandingCard.propTypes = {}

export default ExpandingCard
