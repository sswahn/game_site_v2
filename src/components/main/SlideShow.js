import { useState, useEffect } from 'react'
import styles from './main.module.css'

export default ({ images, isHovering }) => {
  const [state, setState] = useState({ index: 0 })

  useEffect(() => {
    setTimeout(() => setState({ index: state.index === images.length - 1 ? 0 : state.index + 1 }), 2500)
    return () => {}
  }, [state.index])

  return (
    <div className={styles.container}>
      <div id="slideshow" className={styles.slideshow}>
        {images.map((image, index) =>
          <div key={index} style={{ transform: `translate3d(${-state.index * 100}%, 0, 0)` }}>
            <img src={image} alt={index} />
          </div>
        )}
      </div>
    </div>
  )
}