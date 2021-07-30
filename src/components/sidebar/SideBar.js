import { useContext, useEffect } from 'react'
import { Context } from '../../Provider'
import MobileMenu from './MobileMenu'
import styles from './sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [context, dispatch] = useContext(Context)

  // need to highlight by context.filters
  const addFilter = filter => {
    filter.classList.add('highlight-filter')
    const data = [...context.filters, filter.textContent]
    dispatch({ type: 'filters', payload: data })
  }

  const removeFilter = filter => {
    filter.classList.remove('highlight-filter')
    const data = context.filters.filter(item => item !== filter.textContent)
    dispatch({ type: 'filters', payload: data })
  }

  const toggleFilter = event => {
    const filter = event.target
    context.filters.includes(filter.textContent) ? removeFilter(filter) : addFilter(filter)
  }

  const toggleGridView = event => {
    const view = document.getElementById('view')
    if (view.classList.contains('_src_components_main_main_module__grid')) {
      view.className = ''
      view.classList.add('_src_components_main_main_module__list')
    } else {
      view.className = ''
      view.classList.add('_src_components_main_main_module__grid')
    }
  }

  useEffect(() => {

  }, [context.filters])

  return (
    <nav id="sidebar" className={styles.sidebar}>
      {window.innerWidth <= 600 ? <MobileMenu /> : <></>}
      {window.innerWidth > 600 
        ? <div>
            <button onClick={toggleGridView}>
              <FontAwesomeIcon icon={faTh} />
            </button>
          </div>
        : <></>
      }
      <div>
        <div>
          <div>Category</div>
          <button onClick={toggleFilter}>Featured</button>
          <button onClick={toggleFilter}>New Releases</button>
          <button onClick={toggleFilter}>On Sale</button>
          <button onClick={toggleFilter}>Top Sellers</button>
          <button onClick={toggleFilter}>Recommended</button>
        </div>
        <div>
          <div>Genre</div>
          <button onClick={toggleFilter}>Action</button>
          <button onClick={toggleFilter}>Adventure</button>
          <button onClick={toggleFilter}>Horror</button>
          <button onClick={toggleFilter}>RPG</button>
          <button onClick={toggleFilter}>Shooters</button>
          <button onClick={toggleFilter}>Sports &amp; racing</button>
          <button onClick={toggleFilter}>Strategy</button>
          <button onClick={toggleFilter}>Survival</button>
          <button onClick={toggleFilter}>Virtual Reality</button>
        </div>
        <div>
          <div>Platform</div>
          <button onClick={toggleFilter}>Windows</button>
          <button onClick={toggleFilter}>Mac OS X</button>
          <button onClick={toggleFilter}>Linux</button>
          <button onClick={toggleFilter}>Android</button>
          <button onClick={toggleFilter}>iOS</button>
          <button onClick={toggleFilter}>Web</button>
        </div>
        <div>
          <div>Price</div>
          <button onClick={toggleFilter}>Free to play</button>
          <button onClick={toggleFilter}>$5 or less</button>
          <button onClick={toggleFilter}>$10 or less</button>
          <button onClick={toggleFilter}>$15 or less</button>
          <button onClick={toggleFilter}>$20 or less</button>
          <button onClick={toggleFilter}>$25 or less</button>
        </div>
      </div>
    </nav>
  )
}