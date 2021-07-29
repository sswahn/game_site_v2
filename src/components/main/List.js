import { useContext, useState, useEffect } from 'react'
import { Context } from '../../Provider'
import server from '../../utilities/Server'
import store from '../../utilities/Store'
import Filters from './Filters'
import SlideShow from './SlideShow'
import Dropdown from './dropdown/Dropdown'
import styles from './main.module.css'
import fake_data from './data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { faApple } from '@fortawesome/free-brands-svg-icons'
import { faLinux } from '@fortawesome/free-brands-svg-icons'

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

    //const data = context.filter.length ? context.filter.filter()

    const data = context.search ? context.search : fake_data //response.message
    dispatch({ type: 'data', payload: data })
  }

  const filterData = filter => {
    context.data.filter(game => game.filters.includes(filter))
  }

  const openListItem = event => {
    dispatch({ type: 'main', payload: 'list-item', options: event.currentTarget.id })
  }

  const setHoverState = () => {
    setState({ ...state, hover_state: !state.hover_state })
  }

  // these filters will be removed 
  const filterByPlatform = event => {
    const type = event.currentTarget.id
    if (context.filters.includes(type)) {
      return
    }
    const storage = store.get('storage')
    const data = storage.filter(game => game.platform.includes(type))
    // filters override each other...
    dispatch({ type: 'data',  payload: data })
    dispatch({ type: 'filters', payload: [...context.filters, type] })
  }

  const filterByGenre = event => {

  }

  useEffect(() => {
    loadData()
  }, [context.data])

  const renderPlatformIcon = os => {
    if (os.includes('Windows')) {
      return (
        <button key={os} id={os} onClick={filterByPlatform}>
          <FontAwesomeIcon icon={faWindows} />
        </button>
      )
    }
    if (os.includes('Mac')) {
      return (
        <button key={os} id={os} onClick={filterByPlatform}>
          <FontAwesomeIcon icon={faApple} />
        </button>
      )
    }
    if (os.includes('Linux')) {
      return (
        <button key={os} id={os} onClick={filterByPlatform}>
          <FontAwesomeIcon icon={faLinux} />
        </button>
      )
    }
  
  }

  return (
    <div className={styles.list}>
      {context.filters.length ? <Filters /> : <></>}
      {!context.data.length ? <FontAwesomeIcon className="loading-icon" icon={faSpinner} /> : context.data.map(game =>
        <article key={game.id} id={game.id}>
          <figure onClick={openListItem} onMouseOver={setHoverState} onMouseOut={setHoverState}>
            <img src={game.logo} alt={game.title} />
          </figure>

          <header className={styles.tooltip}>
            <h1>{game.title}</h1>
            <time dateTime="">Released: {game.date}</time>
            {state.hover_state ? <SlideShow images={game.images} isHovering={state.hover_state} /> : <></>}
            <p>{game.description.short}</p>
            {/* <p>Rating: <span>{game.rating}</span></p> */}
            <div className={styles.genre}>{game.genre.map(type => <button key={type} id={type} onClick={filterByGenre}>{type}</button>)}</div>
          </header>
          
          <div className={styles.body}>
            <Dropdown id={game.id} />
            <img src={game.developer_logo} alt={game.develper} />
            <div className={styles.text}>
              <p>{`$${game.price}`}</p>
            </div>
            <div className={styles.platform}>{game.platform.map(renderPlatformIcon)}</div>
          </div>
        </article>
      )}
    </div>
  )
}