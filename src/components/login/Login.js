import { useState, useContext } from 'react'
import { Context } from '../../Provider'
import config from '../../config'
import server from '../../utilities/Server'
import styles from './login.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ checked: true })

  const handleCheckbox = event => {
    setState({ checked: !state.checked })
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const request = {
      username: event.target.elements[0].value,
      password: event.target.elements[2].value
    }
    const response = await server.post(config.api.sign_in, request)
    if (response.error !== undefined) {
      return dispatch({ type: 'alert', payload: config.errors.api_response })
    }
    window.location.href = config.url.home
  }

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <div className="login-footer">
            <label>
              <input type="checkbox" checked={state.checked} onChange={handleCheckbox} />
              <span>Remember Me</span>
            </label>
            <div>
              <button className="login-form-link">Forgot Password</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}