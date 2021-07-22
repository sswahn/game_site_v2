import { useContext, useState, useEffect } from 'react'
import { Context } from '../../Provider'
import server from '../../utilities/Server'
import styles from './main.module.css'
import fake_data from './data'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ data: [] })

  const loadData = async () => {
    // make request, return data in state
    setState({ data: fake_data })
  }

  const loadListItem = event => {
    dispatch({ type: 'list-item', payload: event.currentTarget.id })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className={styles.list}>
      {state.data.length && state.data.map(item =>
        <article id={item.id} onClick={loadListItem}>
          <header>
            <h2>{item.title}</h2>
          </header>
        </article>
      )}
    </div>
  )
}