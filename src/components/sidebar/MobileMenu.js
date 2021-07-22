import { useState } from 'react'


export default () => {
  const [state, setState] = useState({ session: undefined })
  
  return (
    <div id="mobile-menu">
      <form>
        <input type="search" />
        <button></button>
      </form>
      {state.session 
        ? <button id="upload" onClick={openModal}>
            <span>Upload</span>
          </button>
        : <button id="login" onClick={openModal}>
            <span>Login</span>
          </button>
      }
      <button>Cart</button>
    </div>
  )
}