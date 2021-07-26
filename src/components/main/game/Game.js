import { useContext, useState, useEffect } from 'react'
import { Context } from '../../../Provider'
import store from '../../../utilities/Store'
import Header from './Header'
import SubHeader from './SubHeader'
import Announcements from './Announcements'
import Tabs from './Tabs'
import styles from './game.module.css'


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

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className={styles.game}>
      {!state.data ? 'Loading...' :
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