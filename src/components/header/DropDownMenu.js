import { useContext } from 'react'
import { Context } from '../../Provider'
import Checkbox from './Checkbox'

export default () => {
  const [context, dispatch] = useContext(Context)

  const clearCheckboxes = event => {
    const elements = document.getElementsByClassName('checkbox')
    Object.keys(elements).forEach(key => {
      elements[key].firstChild.style.background = 'gray'
    })
    event.target.style.display = 'none'
  }

  const toggleClearButton = () => {
    const checkboxes = document.getElementsByClassName('checkbox')
    let is_checked = false
    for (const checkbox of checkboxes) {
      if (checkbox.firstChild.style.background === 'white') {
        is_checked = true
      }
    }
    const clear_button = document.getElementById('clear')
    if (is_checked === true) {
      dispatch({ type: 'checkbox', payload: true })
      clear_button.style.display = 'inline-block'
    } else {
      dispatch({ type: 'checkbox', payload: false })
      clear_button.style.display = 'none'
    }
  }

  return (
    <div id="menu" className="dropdown-content">
      <div className="dropdown-header">
        <div>
          <span>Category</span>
          <span>Genre</span>
          <span>Filters <button id="clear" onClick={clearCheckboxes}>(clear)</button></span>
        </div>
      </div>
      <div className="dropdown-row">
        <div className="dropdown-col">
          <button>Featured</button>
          <button>New Releases</button>
          <button>On Sale</button>
          <button>Recommended</button>
          <button>Top Sellers</button>
        </div>
        <div className="dropdown-col">
          <button>Action</button>
          <button>Adventure</button>
          <button>Horror</button>
          <button>Platformer</button>
          <button><abbr title="Role Playing Games">RPG</abbr></button>
          <button>Shooters</button>
          <button>Sports & Racing</button>
          <button>Strategy</button>
          <button>Survival</button>
        </div>
        <div className="vertical-rule"></div>
        <div className="dropdown-col">
          <Checkbox label="Windows" toggleClearButton={toggleClearButton} />
          <Checkbox label="Mac OS X" toggleClearButton={toggleClearButton} />
          <Checkbox label="Linux" toggleClearButton={toggleClearButton} />
          <Checkbox label="Android" toggleClearButton={toggleClearButton} />
          <Checkbox label="iOS" toggleClearButton={toggleClearButton} />
          <Checkbox label="Web" toggleClearButton={toggleClearButton} />
        </div>
        <div className="dropdown-col">
          <Checkbox label="Free" toggleClearButton={toggleClearButton} />
          <Checkbox label="$5 or less" toggleClearButton={toggleClearButton} />
          <Checkbox label="$10 or less" toggleClearButton={toggleClearButton} />
          <Checkbox label="$15 or less" toggleClearButton={toggleClearButton} />
          <Checkbox label="$20 or less" toggleClearButton={toggleClearButton} />
          <Checkbox label="$25 or less" toggleClearButton={toggleClearButton} />
        </div>
      </div>
    </div>
  )
}