import { useState, useContext } from 'react'
import { Context } from '../../Provider'
import server from '../../utilities/Server'
import styles from './main.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ data: [] })

  const loadData = async () => {
    // make request, return data in state
  }

  const loadListItem = event => {
    dispatch({ type: 'list-item', payload: event.currentTarget.id })
  }

  return (
    <div className={styles.list}>
      {state.data.length && state.data.map(item =>
        <article id={item.id} onClick={loadListItem}>

        </article>
      )}
    </div>
  )
}