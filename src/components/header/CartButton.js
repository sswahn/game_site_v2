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
        {/* shopping cart icon */}
        <span className={styles.tooltiptext}>Cart</span>
      </button>
    </div>
  )
}