import { useState, useEffect } from 'react'
import styles from './main.module.css'

export default ({ images }) => {
  const [state, setState] = useState({ index: 0 })

  const slideShow = () => {
    const slides = document.getElementById('slideshow').children
    if (state.index !== 0) {
      slides[state.index - 1].style.display = 'none'
    }
    if (state.index > slides.length - 1) {
      slides[0].style.display = 'block'
      return setState({ ...state, index: 0 })
    }
    slides[state.index].style.display = 'block'
    setState({ ...state, index: state.index + 1 })
  }

  useEffect(() => {
    setTimeout(slideShow, 2000)
  }, [state.index])

  return (
    <div id="slideshow" className={styles.slideshow}>
      {images.map((image, index) => 
        <div key={index} className={`${styles.slides} ${styles.fade}`} style={index === 0 ? {display:'block'} : {}}>
          <img src={image} alt={index} />
        </div>
      )}
    </div>
  )
}