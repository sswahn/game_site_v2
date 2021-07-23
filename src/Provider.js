import { createContext, useReducer } from 'react'

export const Context = createContext()

export default function Provider({ children }) {
  const data = {
    search: undefined,
    modal: undefined
  }
  function reducer(state, action) {
    switch(action.type) {
      case 'search':
        return { ...state, search: action.payload }
      case 'modal':
        return { ...state, modal: action.payload }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, data)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}
