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

  // figure out how to load from list to list-item
  // prolly in main.js

  return (
    <div className={styles.list}>
      {state.data.length && state.data.map(item =>
        <article id={item.id} onClick={loadListItem}>
          <header>
            <h1>
              <img src={item.logo} alt={item.title} />
            </h1>
          </header>
          <div>
            <img src={item.developer_logo} alt={item.develper} />
            <div>{item.price}</div>
            <div>Rating: {item.rating}</div>
            <div>{item.genre.map(type => <button>{type}</button>)}</div>
          </div>
        </article>
      )}
    </div>
  )
}

      /*
        <article id={item.id} onClick={loadListItem}>
          <header>
            <a href={`/game?v=${item.id}`}>
              <h1>{item.title}</h1>
            </a>
            <a href={`/game?v=${item.id}`}>
              <img src={item.logo} alt={item.title} />
            </a>
            <p>{item.description.short}</p>
            <div>Rating: {item.rating}</div>
            <div>Release Date: {item.release_date}</div>
            <div>Developer: {item.developer}</div>
            <div>Genre: {item.genre.map(type => <button>{type}</button>)}</div>
          </header>
          <div className={styles.content}>
            <iframe width="550" height="315" src={item.trailer} controls="1"></iframe>
            <button>Add to Cart</button>
          </div>
        </article>
      */