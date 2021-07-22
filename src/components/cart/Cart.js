import { useContext } from 'react'
import { Context } from '../../Provider'
import styles from './cart.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)
  
  const login = () => {
    dispatch({ type: 'modal', payload: 'login' })
  }

  return (
    <div className={styles.cart}>
      <h2>Your Cart is empty</h2>
      <button onClick={login}>Sign in to your account</button>
    </div>
  )
}