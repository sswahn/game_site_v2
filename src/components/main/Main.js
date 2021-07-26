import { useContext } from 'react'
import { Context } from '../../Provider'
import List from './List'
import Game from './game/Game'
import styles from './main.module.css'

export default () => {
  const [context] = useContext(Context)

  const renderContent = () => {
    switch (context.main.type) {
      case 'registration':
        return undefined
      case 'list-item':
        return <Game />
      default: 
        return <List />
    }
  }

  return (
    <main id="main" className={styles.main}>
      {renderContent()}
    </main>
  )
}