import { useContext } from 'react'
import { Context } from '../../Provider'
import store from '../../utilities/Store'
import styles from './header.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)

  const search = event => {
    event.preventDefault()
    const value = event.target.elements[0].value
    const storage = store.get('storage')
    const data = storage.filter(game => game.title.includes(value) || game.developers.includes(value))
    if (data.length) {
      dispatch({ type: 'search', payload: data })
    }
  }

  return (
    <form className={styles.form}>
      <input type="search" placeholder="Search" onChange={search} />
      <button type="submit">
        {/* search icon */}
      </button>
    </form>
  )
}