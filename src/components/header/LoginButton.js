import { useContext } from 'react'
import { Context } from '../../Provider'
import styles from './header.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)
  
  const openModal = event => {
    dispatch({ type: 'modal', payload: event.currentTarget.id })
    const modal = document.getElementById('modal')
    modal.style.display = 'block'
  }

  return (
    <div className={styles.login}>
      {context.authenticated 
        ? <button id="upload" onClick={openModal}>
            {/* upload icon */}
          </button>
        : <button id="login" className={styles.tooltip} onClick={openModal}>
            {/* user icon circle */}
            <span className={styles.tooltiptext}>User Login</span>
          </button>
      }
    </div>
  )
}