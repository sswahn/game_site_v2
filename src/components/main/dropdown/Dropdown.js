import { useState, useEffect } from 'react'
import config from '../../../config'
import server from '../../../utilities/Server'
import styles from './dropdown.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

export default ({ id }) => {
  const [state, setState] = useState({ user: undefined })

  const loadUserData = async () => {
    const response = await server.get(config.api.user)
    if (response.error !== undefined) {
      return alert(response.error.message)
    }
    setState({ user: response.message })
  }

  const addToCart = async event => {
    const request = {
      //game info
    }
    const response = await server.post(config.api.cart)
    if (response.error !== undefined) {
      return alert(response.error.message)
    }
  }

  const addToWishlist = async event => {
    const request = {
      //game info
    }
    const response = await server.post(config.api.wishlist)
    if (response.error !== undefined) {
      return alert(response.error.message)
    }
  }

  const addToWatchList = async event => {
    const request = {
      //game info
    }
    const response = await server.post(config.api.watchlist)
    if (response.error !== undefined) {
      return alert(response.error.message)
    }
  }

  const toggleMenu = event => {
    const menu = event.currentTarget.nextElementSibling
    if (menu.style.display !== 'block') {
      menu.style.display = 'block' 
      menu.parentElement.setAttribute('open', 'true')
    } else {
      menu.style.display = 'none'
      menu.parentElement.removeAttribute('open')
    }
  }

  const closeMenu = event => {
    if (event.target.closest('[type=dropdown]') === null && document.querySelector('[open=true]') !== null) {
      const menu = document.querySelector('[open=true]')
      menu.lastChild.style.display = 'none'
      menu.removeAttribute('open')
    }
  }

  useEffect(() => {
    // loadUserData()

    document.body.addEventListener('click', closeMenu)
    return () => {
      document.body.removeEventListener('click', closeMenu)
    }
  }, [])

  return (
    <div className={styles.dropdown} type="dropdown">
      <button onClick={toggleMenu}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </button>
      <div>
        {/* need to check if user has already selected and change display where needed */}
        <button onClick={addToCart}>Add to cart</button>
        <button onClick={addToWishlist}>Add to wishlist</button>
        <button onClick={addToWatchList}>Follow</button>
      </div>
    </div>
  )
}