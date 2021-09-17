import { useEffect, useState } from 'react'

function usePersistentState(key, initialValue) {
  const [state, setState] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initialValue)
  useEffect(() => {
    localStorage.setItem(key, state)
  }, [key, state])
  return [state, setState]
}

export default usePersistentState
