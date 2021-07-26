import { useContext, useState, useEffect } from 'react'
import { Context } from '../../Provider'
import store from '../../utilities/Store'
import Tabs from './tabs/Tabs'
import styles from './main.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ 
    data: undefined,
    trailer: false
  })

  const loadData = () => {
    const storage = store.get('storage')
    console.log('storage: ', storage)
    const data = storage.filter(game => game.id === context.main.options)
    console.log('data: ', data)
    setState({ ...state, data: data[0] })
  }

  const playTrailer = event => {
    const element = event.currentTarget.closest('#header')
    element.children[1].style.display = 'block'
    element.children[2].style.display = 'none'
  }

  const closeTrailer = event => {
    if (event.target.closest('#header') === null) {
      setState({ ...state, trailer: false })
    }
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

  const addToCart = event => {

  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className={styles.game}>
      {!state.data ? 'Loading...' :
      <article>
        <header id="header">
          <h1>{state.data.title}</h1>
          <video id="trailer" className="" src={state.data.trailer} 
            playsInline="true" 
            poster={state.data.logo} 
            preload="none" 
            controlsList="nodownload" 
            controls>
          </video>
          <div> 
            <img src={state.data.logo} alt={state.data.title} />
            <button onClick={playTrailer} title="Play Trailer">
              <FontAwesomeIcon icon={faPlayCircle} />
            </button>
          </div>
        </header>
        
        <section className={styles.subheader}>
          <div>
            <p>Developer: <span>{state.data.developer}</span></p>
            <p>Rating: <span>{state.data.rating}</span></p>
            <p>Genre: {state.data.genre.map(type => <button key={type} id={type} onClick={filterByGenre}>{type}</button>)}</p>
            <p>Release date: <span>{state.data.date}</span></p>
          </div>
          <button onClick={addToCart}>Add to cart</button> 
        </section>
        <section>
          {/* show the most recent announcement
            and a "view more" link to modal list
          */}
          <button>Open Announcements modal</button> 
        </section>

        <Tabs data={state.data} />

        <section>
         meta section, esrb etc. external links (game/dev website),
        </section>
        <section className="reviews">
          <p>Reviews section</p>
        </section>
      </article>
      }
    </div>
  )
}