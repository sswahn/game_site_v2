import { useContext } from 'react'
import { Context } from '../../../Provider'
import Dropdown from '../dropdown/Dropdown'
import styles from './game.module.css'

export default ({ data }) => {
  const [context, dispatch] = useContext(Context)

  const filterByGenre = event => {
    // need to dispatch to main page with filter option
  }

  const addToCart = event => {
    // make post request to user "cart" api
  }

  return (
    <section className={styles.subheader}>
      <div>
        <p>Developer: <button>{data.developer}</button></p>
        <p>Rating: <button>{data.rating}</button></p>
        <p>Genre: {data.genre.map(type => <button key={type} id={type} onClick={filterByGenre}>{type}</button>)}</p>
        <p>Release date: <span>{data.date}</span></p>
      </div>
      <div>
        <Dropdown id={data.id} />
      </div>
    </section>
  )
}