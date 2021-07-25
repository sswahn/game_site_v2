import { useContext, useState, useEffect } from 'react'
import { Context } from '../../Provider'
import config from '../../config'
import server from '../../utilities/Server'
import store from '../../utilities/Store'
import styles from './cart.module.css'
import fake_data from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ 
    data: [],
    total: 0
  })

  const login = () => {
    dispatch({ type: 'modal', payload: 'login' })
  }

  const loadData = async () => {
    /* 
    const response = await server.get(config.api.cart)
    if (response.error !== undefined) {
      return alert(response.error.message)
    }
    */
    store.set('cart', fake_data)
    const total = fake_data.reduce((acc, val) => parseFloat(val.price) + acc, 0)
    setState({ data: fake_data, total: total.toFixed(2) })
  }

  const closeModal = event => {
    if (event.target.closest('#login') === null) {
      dispatch({ type: 'modal' })
    }
  }

  useEffect(() => {
    loadData()
    document.body.addEventListener('click', closeModal)
    return () => {
      document.body.removeEventListener('click', closeModal)
    }
  }, [])

  return (
    <div className={styles.cart}>
      <section id="cart-container" className={styles.container}>
        <h1>Your Shopping Cart</h1>
        {/*
        <h1>Your Cart is empty</h1>
        <button onClick={login}>Sign in to your account</button>
        */}
        {!state.data.length ? <FontAwesomeIcon className="loading-icon" icon={faSpinner} /> : state.data.map(game =>
          <article key={Math.random()}>
            <img src={game.logo} alt={game.title} />
            <p>{game.title}</p>
            <div>
              <p>{game.price}</p>
              <div>
                <a href="">Remove</a>
              </div>
            </div>
          </article>
        )}
        <div>
          <div>
            <strong>Estimated total:</strong>
            <strong>{`$${state.total}`}</strong>
          </div>
          <button>Checkout</button>
        </div>
      </section>
    </div>
  )
}