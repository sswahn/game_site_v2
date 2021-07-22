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
    document.getElementById('modal').style.display = 'block'
  }

  useEffect(() => {
    createSession()
  }, [state.session])

  return (
    <div className={styles.login}>
      {state.session 
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