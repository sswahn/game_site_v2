import { useContext } from 'react'
import { Context } from '../../../Provider'
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
        <p>Developer: <span>{data.developer}</span></p>
        <p>Rating: <span>{data.rating}</span></p>
        <p>Genre: {data.genre.map(type => <button key={type} id={type} onClick={filterByGenre}>{type}</button>)}</p>
        <p>Release date: <span>{data.date}</span></p>
      </div>
      <button id={data.id} onClick={addToCart}>Add to cart</button> 
    </section>
  )
}