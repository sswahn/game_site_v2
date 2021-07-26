import { useContext, useState, useEffect } from 'react'
import { Context } from '../../Provider'
import store from '../../utilities/Store'
import styles from './main.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ 
    data: [],
    trailer: false
  })

  const loadData = () => {
    const storage = store.get('storage')
    const data = storage.filter(game => game.id === context.main.options)
    setState({ ...state, data: data[0] })
  }

  const playTrailer = event => {
    setState({ ...state, trailer: true })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className={styles.game}>
      <article>
        <header>
          <h1>{state.data.title}</h1>
          {state.trailer 
            ? <iframe src={state.data.trailer} title={state.data.title}></iframe>
            : <div> 
                <img src={state.data.logo} alt={state.data.title} />
                <button onClick={playTrailer}>
                  <FontAwesomeIcon icon={faPlayCircle} />
                </button>
              </div>
          }
        </header>
        <div>
          
        </div>
        <footer></footer>
      </article>
    </div>
  )
}