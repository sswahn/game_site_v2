import { useContext, useState, useEffect } from 'react'
import { Context } from '../../Provider'
import cookie from '../../utilities/Cookies'
import styles from './header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ session: undefined })

  const createSession = () => {
    const token = cookie.get('token')
    setState({ session: token })
  }

  const openModal = event => {
    dispatch({ type: 'modal', payload: event.currentTarget.id })
  }

  useEffect(() => {
    createSession()
  }, [state.session])

  return (
    <div className={styles.login}>
      {state.session 
        ? <button id="upload" className={styles.tooltip} onClick={openModal}>
            <FontAwesomeIcon icon={faUpload} />
            <span className={styles.tooltiptext}>Upload</span>
          </button>
        : <button id="login" className={styles.tooltip} onClick={openModal}>
            <FontAwesomeIcon icon={faUserCircle} />
            <span className={styles.tooltiptext}>Login</span>
          </button>
      }
    </div>
  )
}