import { useContext, useState, useEffect } from 'react'
import { Context } from '../../Provider'
import server from '../../utilities/Server'
import store from '../../utilities/Store'
import SlideShow from './SlideShow'
import styles from './main.module.css'
import fake_data from './data'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ data: [] })

  const loadData = async () => {
    // make request, return data in state

    // use store
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
      {state.data.length && state.data.map(game =>
        <article id={game.id} onClick={loadListItem}>

          <header className={styles.tooltip}>
            <h1>{game.title}</h1>
            <time dateTime="">{game.release_date}</time>
            <SlideShow images={game.images} />
            <p>{game.description.short}</p>
          </header>
          <div>
            <img src={game.logo} alt={game.title} />
          </div>
          <div>
            <img src={game.developer_logo} alt={game.develper} />
            <div>{game.price}</div>
            <div>Rating: {game.rating}</div>
            <div>{game.genre.map(type => <button>{type}</button>)}</div>
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