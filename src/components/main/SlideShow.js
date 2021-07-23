import { useState, useEffect } from 'react'
import styles from './main.module.css'

export default ({ images }) => {
  const [state, setState] = useState({ index: 0 })

  const slideShow = () => {
    const slides = document.getElementById('slideshow').children
    
    console.log('index: ', state.index)


    // what is the problem
    // problem is need to hide last image
    // then show next image

    //slides[state.index].style.display = 'none'
    
    if (state.index >= slides.length) {
      return setState({ ...state, index: 0 })
    } 
    slides[state.index].style.display = 'block'
    setState({ ...state, index: state.index + 1 })
  }

  useEffect(() => {
    //setTimeout(slideShow, 2000)
  }, [state.index])

  return (
    <div id="slideshow" className={styles.slideshow}>
      {images.map((image, index) => 
        <div key={index} className={`${styles.slides} ${styles.fade}`}>
          <img src={image} alt={index} style={{width:'100%'}} />
        </div>
      )}
    </div>
  )
}