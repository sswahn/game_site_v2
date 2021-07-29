import styles from './game.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

export default ({ data }) => {

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

  return (
    <header id="header" className={styles.header}>
      <h1>{data.title}</h1>
      <video id="trailer" className="" src={data.trailer} 
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
    </header>
  )
}