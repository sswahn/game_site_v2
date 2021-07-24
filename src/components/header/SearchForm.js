import { useContext } from 'react'
import { Context } from '../../Provider'
import store from '../../utilities/Store'
import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [context, dispatch] = useContext(Context)

  const search = event => {
    event.preventDefault()
    const value = event.target.elements[0].value.toLowerCase()
    const storage = store.get('storage')
    const data = storage.filter(game => 
      game.title.toLowerCase().includes(value) || game.developer.toLowerCase().includes(value)
    )
    if (data.length) {
      dispatch({ type: 'search', payload: data })
    }
  }

  return (
    <form className={styles.form} onSubmit={search}>
      <input type="search" placeholder="Search" />
      <button type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  )
}