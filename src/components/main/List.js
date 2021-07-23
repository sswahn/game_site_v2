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
    /* 
    const response = await server.get(config.api.games)
    if (response.error !== undefined) {
      return alert(response.error.message)
    }
    */
    store.set('storage', fake_data)
    setState({ data: fake_data })
  }

  const filterByGenre = event => {
    const type = event.target.id
    const storage = store.get('storage')
    const data = storage.filter(game => game.genre.includes(type))
    setState({ data })
  }

  const openListItem = event => {
    dispatch({ type: 'list-item', payload: event.currentTarget.id })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className={styles.list}>

      {/* add loading icon spinner with ternary */}

      {state.data.length && state.data.map(game =>
        <article key={game.id} id={game.id} onClick={openListItem}>
          <header className={styles.tooltip}>
            <h1>{game.title}</h1>
            <time dateTime="">{game.release_date}</time>
            <SlideShow images={game.images} />
            <p>{game.description.short}</p>
            <div>{game.platforms}</div>
          </header>
          <div>
            <img src={game.logo} alt={game.title} />
          </div>
          <div>
            <img src={game.developer_logo} alt={game.develper} />
            <div>{game.price}</div>
            <div>Rating: {game.rating}</div>
            <div>{game.genre.map(type => <button key={type} id={type} onClick={filterByGenre}>{type}</button>)}</div>
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