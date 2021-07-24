import { useContext } from 'react'
import { Context } from '../../Provider'
import styles from './header.module.css'

export default function ModalMenu() {
  const [context, dispatch] = useContext(Context)
  
  const openModal = () => {
    dispatch({ type: 'modal', payload: 'cart'})
  }

  return (
    <div className={styles.cart}>
      <button className={styles.tooltip} onClick={openModal}>
        <span role="img" aria-label="cart">&#128722;</span>
        <span className={styles.tooltiptext}>Cart</span>
      </button>
    </div>
  )
}