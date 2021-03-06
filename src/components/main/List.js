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
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

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
    store.set('data', fake_data)

    const data = context.search ? context.search : fake_data //response.message
    dispatch({ type: 'data', payload: data })
  }

  const filterData = filter => {
    context.data.filter(game => game.filters.includes(filter))
  }

  const openListItem = event => {
    dispatch({ type: 'main', payload: 'list-item', id: event.currentTarget.parentElement.id })
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
        <button key={os} id={os} onClick={filterByPlatform} title="Windows">
          <FontAwesomeIcon icon={faWindows} />
        </button>
      )
    }
    if (os.includes('Mac')) {
      return (
        <button key={os} id={os} onClick={filterByPlatform} title="Mac">
          <FontAwesomeIcon icon={faApple} />
        </button>
      )
    }
    if (os.includes('Linux')) {
      return (
        <button key={os} id={os} onClick={filterByPlatform} title="Linux">
          <FontAwesomeIcon icon={faLinux} />
        </button>
      )
    }
    if (os.includes('Android')) {
      return (
        <button key={os} id={os} onClick={filterByPlatform} title="Android">
          <FontAwesomeIcon icon={faAndroid} />
        </button>
      )
    }
    if (os.includes('iOS')) {
      return (
        <button key={os} id={os} onClick={filterByPlatform} title="iOS">
          <FontAwesomeIcon icon={faApple} />
        </button>
      )
    }
    if (os.includes('Web')) {
      return (
        <button key={os} id={os} onClick={filterByPlatform} title="Web">
          <FontAwesomeIcon icon={faGlobe} />
        </button>
      )
    }
  }

  return (
    <div id="view" className={styles.grid}>
      {context.filters.length ? <Filters /> : <></>}
      {!context.data.length ? <FontAwesomeIcon className="loading-icon" icon={faSpinner} /> : context.data.map(game =>
        <article key={game.id} id={game.id}>
          <figure onClick={openListItem} onMouseOver={setHoverState} onMouseOut={setHoverState}>
            <img src={game.logo} alt={game.title} />
          </figure>
          
          {/*  tooltip for images?
          <div>
            <img src={game.developer_logo} alt={game.develper} />
            {state.hover_state ? <SlideShow images={game.images} /> : <></>}
          </div> 
          */}

          <header className={styles.header}>
            <h1>{game.title}</h1>
            <span>{`$${game.price}`}</span>
            {/* <p>Rating: <span>{game.rating}</span></p> */}
            <Dropdown id={game.id} />
            <time dateTime={game.date_attribute}>Released: {game.date}</time>
          </header>
          {/* <div className={styles.body}>
            <p>{game.description.short}</p>
          </div> */}
          <footer>
            <div className={styles.genre}>{game.genre.map(type => <button key={type} id={type} onClick={filterByGenre}>{type}</button>)}</div>
            <div className={styles.platform}>{game.platform.map(renderPlatformIcon)}</div>
          </footer>
        </article>
      )}
    </div>
  )
}