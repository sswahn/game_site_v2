import { useState, useEffect } from 'react'
import config from '../../../config'
import server from '../../../utilities/Server'
import styles from './dropdown.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'

export default ({ id }) => {
  const [state, setState] = useState({ 
    cart: false,
    wishlist: false,
    watchlist: false
  })

  const loadData = async () => {
    const response = await server.get(config.api.user)
    if (response.error !== undefined) {
      return alert(response.error.message)
    }
    const cart = response.message.cart.includes(id)
    const wishlist = response.message.wishlist.includes(id)
    const watchlist = response.message.watchlist.includes(id)
    setState({ cart, wishlist, watchlist })
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

  const shareGame = async event => {

  }

  const toggleMenu = event => {
    document.querySelectorAll('[type=dropdown]').forEach(x => {
      if (event.currentTarget.parentElement.id !== x.id) { 
        x.lastChild.style.display = 'none'
      }
    })
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
    // loadData()
    document.body.addEventListener('click', closeMenu)
    return () => {
      document.body.removeEventListener('click', closeMenu)
    }
  }, [])

  return (
    <div id={id} className={styles.dropdown} type="dropdown">
      <button onClick={toggleMenu}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </button>
      <div>
        {state.cart 
          ? <div>
              <FontAwesomeIcon icon={faCheckSquare} />
              <span>In cart</span> 
            </div>
          : <button onClick={addToCart}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>Add to cart</span>
            </button>
        }
        {state.wishlist 
          ? <div>
              <FontAwesomeIcon icon={faCheckSquare} />
              <span>In wishlist</span> 
            </div>
          : <button onClick={addToWishlist}>
              <FontAwesomeIcon icon={faHeart} />
              <span>Add to wishlist</span>
            </button>
        }
        {state.watchlist 
          ? <div>
              <FontAwesomeIcon icon={faCheckSquare} />
              <span>Following</span>
            </div>
         : <button onClick={addToWatchList}>
             <FontAwesomeIcon icon={faComments} />
             <span>Follow</span>
           </button>
        }
        <button onClick={shareGame}>
          <FontAwesomeIcon icon={faShareAlt} />
          <span>Share</span>
        </button>
      </div>
    </div>
  )
}