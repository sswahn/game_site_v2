import { useState } from 'react'
import DropDownMenu from './DropDownMenu'
import styles from './header.module.css'

export default () => {
  const [state, setState] = useState({ menu_open: false })

  const onMouseOver = event => {
    event.currentTarget.classList.add('dropdown-btn-hover')
  }

  const onMouseOut = event => {
    if (state.menu_open) {
      return
    }
    event.currentTarget.classList.remove('dropdown-btn-hover')
  }

  const onClick = event => {
    const menu = document.getElementById('menu')
    const button = event.currentTarget
    if (state.menu_open) {
      setState({ menu_open: !state.menu_open })
      menu.style.display = 'none'
    } else {
      setState({ menu_open: !state.menu_open })
      button.classList.add('dropdown-btn-hover')
      menu.style.display = 'block'
    }
  }
  
  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <button id="games" className={styles.games} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={onClick}>
          <span>Games</span>
          {state.menu_open ?  {/* caret icon up */} : {/* caret icon down */} }
        </button>
        <DropDownMenu />
      </div>
    </div>
  )
}