import { useContext } from 'react'
import { Context } from '../../Provider'
//import Login from './Login'
//import Cart from './Cart'
import styles from './modal.module.css'

export default function Modal() {
  const [context, dispatch] = useContext(Context)

  const close = () => {
    dispatch({ type: 'modal' })
  }
 
  const renderContent = () => {
    switch(context.modal) {
      case 'login':
        //return <Login />
      case 'cart':
       // return <Cart />
      default:
        return
    }
  }

  return (
    <div id="modal" className={styles.modal} style={{
      display: context.modal ? 'block' : 'none'
    }}>
      <div>
        <button className={styles.button} onClick={close}>
          {/* fa times icon */}
        </button>
      </div>
      <div id="content" className={styles.content}>
        {renderContent()}
      </div>
    </div>
  )
}