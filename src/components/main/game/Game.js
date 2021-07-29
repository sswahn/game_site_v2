import { useContext, useState, useEffect } from 'react'
import { Context } from '../../../Provider'
import store from '../../../utilities/Store'
import Header from './Header'
import SubHeader from './SubHeader'
import Announcements from './Announcements'
import Tabs from './Tabs'
import styles from './game.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ 
    data: undefined,
    trailer: false
  })

  const loadData = () => {
    // make request fallback
    const data = store.get('data')
    const game = data.filter(game => game.id === context.main.id)
    setState({ ...state, data: game[0] })
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className={styles.game}>
      {!state.data ? <FontAwesomeIcon className="loading-icon" icon={faSpinner} /> :
      <article>
        <Header data={state.data} />
        <SubHeader data={state.data} />
        <Announcements />
        <Tabs data={state.data} />
        
        <section>
         {/* meta section, esrb etc. external links (game/dev website), */}
        </section>
        <section className="reviews">
          <p>Reviews section</p>
        </section>
      </article>
      }
    </div>
  )
}