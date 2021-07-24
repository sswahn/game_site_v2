import { useContext, useState, useEffect } from 'react'
import { Context } from '../../Provider'
import cookie from '../../utilities/Cookies'
import styles from './header.module.css'

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
        ? <button id="upload" onClick={openModal}>
            {/* upload icon */}
            <span className={styles.tooltiptext}>Upload</span>
          </button>
        : <button id="login" className={styles.tooltip} onClick={openModal}>
            <span role="img" aria-label="user">&#128100;</span>
            <span className={styles.tooltiptext}>Login</span>
          </button>
      }
    </div>
  )
}