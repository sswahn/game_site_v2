import { useContext } from 'react'
import { Context } from '../../Provider'
import List from './List'
import ListItem from './ListItem'
import styles from './main.module.css'

export default () => {
  const [context] = useContext(Context)

  const renderContent = () => {
    switch (context.main) {
      case 'registration':
        return undefined
      case 'list-item':
        return <ListItem />
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