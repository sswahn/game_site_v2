import { useContext } from 'react'
import { Context } from '../../Provider'
import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [context, dispatch] = useContext(Context)
  
  const openModal = () => {
    dispatch({ type: 'modal', payload: 'cart'})
  }
  //need ! operator to hide button when not logged in
  return context.session ? <></> : (
    <div className={styles.cart}>
      <button className={styles.tooltip} onClick={openModal}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className={styles.tooltiptext}>Cart</span>
      </button>
    </div>
  )
}