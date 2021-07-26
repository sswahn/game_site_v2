import { useContext, useState, useEffect } from 'react'
import { Context } from '../../../Provider'
import config from '../../../config'
import server from '../../../utilities/Server'
import store from '../../../utilities/Store'
import styles from './game.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ data: [] })

  const loadData = async () => {
    const response = await server.get(config.api.announcements)
    if (response.error !== undefined) {
      return alert(response.error.message)
    }
    store.set('announcements', response.message )
    setState({ ...state, data: response.message[0] })
  }

  const openModal = () => {
    dispatch({ type: 'modal', payload: 'announcements', options: state.data })
  }

  useEffect(() => {
    //loadData()
  }, [])

  return (
    <section className={styles.announcements}>
      {/* show the most recent announcement and a "view more" link to modal list */}
      <div>
        <h2>{state.data.title}</h2>
        <img src={state.data.image} alt={state.data.title} />
        <p>{state.data.body}</p>
      </div>
      <button onClick={openModal}>Open Announcements modal</button> 
    </section>
  )
}