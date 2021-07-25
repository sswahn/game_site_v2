import { useContext, useState, useEffect } from 'react'
import { Context } from '../../Provider'
import server from '../../utilities/Server'
import store from '../../utilities/Store'
import Filters from './Filters'
import SlideShow from './SlideShow'
import styles from './main.module.css'
import fake_data from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ hover_state: false })

  const loadData = async () => {
    /* 
    const response = await server.get(config.api.games)
    if (response.error !== undefined) {
      return alert(response.error.message)
    }
    */
    store.set('storage', fake_data) //response.message
    const data = context.search ? context.search : fake_data //response.message
    dispatch({ type: 'data', payload: data })
  }

  const openListItem = event => {
    dispatch({ type: 'list-item', payload: event.currentTarget.id })
  }

  const setHoverState = () => {
    setState({ ...state, hover_state: !state.hover_state })
  }

  const filterByGenre = event => {
    const type = event.target.id
    if (context.filters.includes(type)) {
      return
    }
    const storage = store.get('storage')
    const data = storage.filter(game => game.genre.includes(type))
    dispatch({ type: 'data',  payload: data })
    dispatch({ type: 'filters', payload: [...context.filters, type] })
  }

  useEffect(() => {
    loadData()
  }, [context.search])

  return (
    <div className={styles.list}>
      {context.filters.length ? <Filters /> : <></>}
      {!context.data.length ? <FontAwesomeIcon className="loading-icon" icon={faSpinner} /> : context.data.map(game =>
        <article key={game.id} id={game.id} onClick={openListItem} onMouseOver={setHoverState} onMouseOut={setHoverState}>
          <header className={styles.tooltip}>
            <h1>{game.title}</h1>
            <time dateTime="">{game.release_date}</time>
            {state.hover_state ? <SlideShow images={game.images} isHovering={state.hover_state} /> : <></>}
            <p>{game.description.short}</p>
            {/* use platform icons instead of text */}
            <div>{game.platforms}</div>
          </header>
          <div className={styles.logo}>
            <img src={game.logo} alt={game.title} />
          </div>
          <div className={styles.meta}>
            <div>
              <img src={game.developer_logo} alt={game.develper} />
            </div>
            <div>
              <p>{`$${game.price}`}</p>
              <p>Rating: <span>{game.rating}</span></p>
              <div>{game.genre.map(type => <button key={type} id={type} onClick={filterByGenre}>{type}</button>)}</div>
            </div>
          </div>
        </article>
      )}
    </div>
  )
}