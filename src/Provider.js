import { createContext, useReducer } from 'react'

export const Context = createContext()

export default function Provider({ children }) {
  const data = {
    data: [],
    filters: [],
    main: {},
    search: undefined,
    modal: undefined
  }
  function reducer(state, action) {
    switch(action.type) {
      case 'data':
        return { ...state, data: action.payload }
      case 'filters':
        return { ...state, filters: action.payload }
      case 'search':
          return { ...state, search: action.payload }
      case 'modal':
        return { ...state, modal: action.payload }
      case 'main':
        return { ...state, main: { type: action.payload, options: action.options } }
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
