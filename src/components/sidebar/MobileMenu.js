import { useContext, useState } from 'react'
import { Context } from '../../Provider'
import styles from './sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ session: undefined })
  
  const openModal = event => {
    dispatch({ type: 'modal', payload: event.currentTarget.id })
  }

  const goHome = event => {
    dispatch({ type: 'main' })
  }

  return (
    <div id="mobile-menu" className={styles.mobile}>
      <form>
        <input type="search" placeholder="Search" />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      <button onClick={goHome}>
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </button>
      {state.session 
        ? <button id="upload" onClick={openModal}>
            <FontAwesomeIcon icon={faUpload} />
            <span>Upload</span>
          </button>
        : <button id="login" onClick={openModal}>
            <FontAwesomeIcon icon={faUserCircle} />
            <span>Login</span>
          </button>
      }
      <button id="cart" onClick={openModal}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>Cart</span>
      </button>
    </div>
  )
}