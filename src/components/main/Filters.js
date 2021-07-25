import { useContext } from 'react'
import { Context } from '../../Provider'
import styles from './main.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)

  const removeFilter = event => {
    const filter = event.target.textContent
    const data = context.filters.filter(item => item !== filter)
    dispatch({ type: 'filters', payload: data })
  }

  return (
    <div id="filters" className={styles.filters}>
      {context.filters.map(filter => <div onClick={removeFilter}>{filter}</div>)}
    </div>
  )
}