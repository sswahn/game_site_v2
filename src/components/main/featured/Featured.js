import { useState } from 'react'
import styles from './featured.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


export default ({ images }) => {

  const [state, setState] = useState({
    images: [
      "https://cdn.akamai.steamstatic.com/steam/apps/1585400/ss_3b51e4bca2b4fb3a77a15452d45ce98ec8103fef.1920x1080.jpg?t=1626985888",
      "https://cdn.akamai.steamstatic.com/steam/apps/1585400/ss_79de0442446bdd10d34e699cd4a3a09a6e5c38bf.1920x1080.jpg?t=1626985888",
      "https://cdn.akamai.steamstatic.com/steam/apps/1585400/ss_88082dd73345d292dc2c777b14855c7f926451c3.600x338.jpg?t=1626985888"
    ],
  })

  const prevSlide = event => {
    
  }

  const nextSlide = event => {
    
  }

  const currentSlide = (n) => {
    
  }

  const showSlides = (n) => {

  }

  return (
    <div className={styles.featured}>
      <div className={styles.container}>
        {state.images.map(image => 
          <div className="slides fade">
            <img src={image} alt={Math.random()} />
          </div>   
        )}
        <button className={styles.prev} onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className={styles.next} onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className={styles.thumbnails}>
        <span onClick={currentSlide(1)}></span>
        <span onClick={currentSlide(2)}></span>
        <span onClick={currentSlide(3)}></span>
      </div>
    </div>
  )
}