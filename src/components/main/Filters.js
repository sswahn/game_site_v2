import { useContext } from 'react'
import { Context } from '../../Provider'
import styles from './main.module.css'

export default () => {
  const [context, dispatch] = useContext(Context)

  const removeSideBarHighLight = () => {
    const sidebar = document.getElementById('sidebar')
    const buttons = sidebar.querySelectorAll(':scope button')
    buttons.forEach(button => {
      if (button.classList.contains('hightlight-filter')) {
        button.classList.remove('highlight-filter')
      }
    })
  }

  const removeFilter = event => {
    const filter = event.target.textContent
    const data = context.filters.filter(item => item !== filter)
    dispatch({ type: 'filters', payload: data })
    removeSideBarHighLight()
  }

  return (
    <div id="filters" className={styles.filters}>
      {context.filters.map(filter => <div onClick={removeFilter}>{filter}</div>)}
    </div>
  )
}