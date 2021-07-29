import { useState, useEffect, useRef } from 'react'
import styles from './main.module.css'

export default ({ images, isHovering }) => {
  const [state, setState] = useState({ index: 0 })
  const is_mounted = useRef(true)

  const slideShow = async () => {
    if (!isHovering && is_mounted.current) {
      return
    }
    const slides = document.getElementById('slideshow').children
    if (state.index !== 0) {
      slides[state.index - 1].style.display = 'none'
    }
    if (state.index > slides.length - 1) {
      slides[0].style.display = 'block'
      return setState({ ...state, index: 0 })
    }
    slides[state.index].style.display = 'block'
    await new Promise(resolve => setTimeout(resolve, 2500))
    setState({ ...state, index: state.index + 1 })
  }

  useEffect(() => {
    slideShow()
    return () => {
      is_mounted.current = false
    }
  }, [state.index])

  // problem is loop below and looping above, why two loops? dunno.
  // still think the problem is useEffect, shouldnt use that to replace loops
  // cause it causes re-renders! 

  return (
    <div id="slideshow" className={styles.slideshow}>
      {images.map((image, index) => {
        console.log(index, image)
        return <div key={index} className={`${styles.slides} ${styles.fade}`} style={index === 0 ? {display:'block'} : {}}>
          <img src={image} alt={index} />
        </div>
      })}
    </div>
  )
}