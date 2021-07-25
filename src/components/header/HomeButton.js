import { useContext } from 'react'
import { Context } from '../../Provider'
import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'


export default () => {
  const [context, dispatch] = useContext(Context)
  
  const goHome = event => {
    dispatch({ type: 'main' })
  }

  return (
    <div className={styles.home}>
      <button className={styles.tooltip} onClick={goHome}>
        <FontAwesomeIcon icon={faHome} />
        <span className={styles.tooltiptext}>Home</span>
      </button>
    </div>
  )
}