import { useState, useEffect } from 'react'
import styles from './game.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

export default ({ data }) => {
  const [state, setState] = useState({ index: 0 })

  const playTrailer = event => {
    const element = event.currentTarget.closest('#header')
    element.children[1].style.display = 'block'
    element.children[2].style.display = 'none'
  }

  const closeTrailer = event => {
    if (event.target.closest('#header') === null) {
      //setState({ ...state, trailer: false })
    }
  }

  useEffect(() => {
    setTimeout(() => setState({ index: state.index === data.images.length ? 0 : state.index + 1 }), 1500)
  }, [state.index])

  return (
    <header id="header" className={styles.header}>
      <h1>{data.title}</h1>
      <div className={`${styles.slides} ${styles.fade}`} style={
        state.index === 0 
          ? {display:'block',background:'#717171'} 
          : {display:'none'}
      }>
        <video id="trailer" src={data.trailer} 
          playsInline={true} 
          poster={data.logo} 
          preload="none" 
          controlsList="nodownload" 
          controls>
        </video>
        <div> 
          <img src={data.logo} alt={data.title} />
          <button onClick={playTrailer} title="Play Trailer">
            <FontAwesomeIcon icon={faPlayCircle} />
          </button>
        </div>
      </div>

      {/* loop over images */}
      {data.images.map((image, index) => 
        <div className={`${styles.slides} ${styles.fade}`}style={
          state.index === index + 1 
            ? {display:'block',background:'#717171'} 
            : {display:'none'}
        }>
          <img src={image} alt={image} />
        </div>
      )}
  
  {/* good luck with this: */}
      <div className={styles.nav}>
        <span onclick="currentSlide(1)"></span>
        <span onclick="currentSlide(2)"></span>
        <span onclick="currentSlide(3)"></span>
      </div>
    </header>
  )
}