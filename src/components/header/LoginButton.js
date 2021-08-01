import { useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import cookie from '../../utilities/Cookies'
import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [context, dispatch] = useContext(Context)

  const createSession = () => {
    const token = cookie.get('token')
    dispatch({ type: 'session', payload: token })
  }

  const openModal = event => {
    dispatch({ type: 'modal', payload: event.currentTarget.id })
  }

  useEffect(() => {
    createSession()
  }, [context.session])

  return (
    <div className={styles.login}>
      {context.session 
        ? <button id="upload" className={styles.tooltip} onClick={openModal}>
            <FontAwesomeIcon icon={faChevronCircleDown} />
            <span className={styles.tooltiptext}>Profile</span>
          </button>
        : <button id="login" className={styles.tooltip} onClick={openModal}>
            <FontAwesomeIcon icon={faUserCircle} />
            <span className={styles.tooltiptext}>Login</span>
          </button>
      }
    </div>
  )
}