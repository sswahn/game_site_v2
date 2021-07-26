import { useContext, useState, useEffect } from 'react'
import { Context } from '../../Provider'
import store from '../../utilities/Store'
import styles from './main.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ 
    data: [],
    trailer: false
  })

  const loadData = () => {
    const storage = store.get('storage')
    console.log('storage: ', storage)
    const data = storage.filter(game => game.id === context.main.options)
    console.log('data: ', data)
    setState({ ...state, data: data[0] })
  }

  const playTrailer = event => {
    const element = event.currentTarget.closest('#header')
    element.children[1].style.display = 'block'
    element.children[2].style.display = 'none'
  }

  const closeTrailer = event => {
    if (event.target.closest('#header') === null) {
      setState({ ...state, trailer: false })
    }
  }

  const openTab = event => {
    const tabs = event.target.parentElement
    const tab = event.target.textContent.toLowerCase()
    for (const item of tabs.children) {
      item.textContent.toLowerCase() === tab
       ? item.style.background = 'gray'
       : item.style.background = 'white'
    }
    const content = document.getElementById('tab-content')
    for (const item of content.children) {
      item.id === tab ? item.style.display = 'block' : item.style.display = 'none' 
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className={styles.game}>
      <article>
        <header id="header">
          <h1>{state.data.title}</h1>
          <p>Rating: {state.data.rating}</p>
          <iframe src={state.data.trailer} title={state.data.title}></iframe>
          <div> 
            <img src={state.data.logo} alt={state.data.title} />
            <button onClick={playTrailer} title="Play Trailer">
              <FontAwesomeIcon icon={faPlayCircle} />
            </button>
          </div>
        </header>
        <div className={styles.purchase}>
          <button>Buy</button>
        </div>
        <section>
          <nav className={styles.tabs}>
            <button onClick={openTab} style={{background:'gray'}}>About</button>
            <button onClick={openTab}>Updates</button>
            <button onClick={openTab}>Requirements</button>
          </nav>
          <div id="tab-content" className={styles.tabcontent}>
            <div id="about" style={{display:'block'}}>
              <h3>About</h3>
              {/* <p>{state.data.description.about}</p> */}
              <p>yo</p>
            </div>
            <div id="updates">
              <h3>Updates</h3>
              <p>a list of updates</p>
            </div>
            <div id="requirements">
              <h3>System Requirements</h3>
              <div>
                <h4>MINIMUM:</h4>
                <p>Requires a 64-bit processor and operating system</p>
                <ul>
                  <li><span>OS:</span> Windows® 10 64-bit</li>
                  <li><span>Processor:</span> Intel® Core™ i5-2400 / AMD CPU with 4 physical cores @ 3Ghz</li>
                  <li><span>Memory:</span> 8 GB RAM</li>
                  <li><span>Graphics:</span> NVIDIA® GeForce® GTX 670 2GB / AMD Radeon R9 280 or better</li>
                  <li><span>DirectX:</span> Version 12</li>
                  <li><span>Network:</span> Broadband Internet connection</li>
                  <li><span>Storage:</span> 50 GB available space</li>
                  <li><span>Additional Notes:</span> Internet connection required to play, offers in-game purchases</li>
                </ul>
              </div>
              <div>
                <h4>RECOMMENDED:</h4>
                <p>Requires a 64-bit processor and operating system</p>
                <ul>
                  <li><span>OS:</span> Windows® 10 64-bit</li>
                  <li><span>Processor:</span> Intel® Core™ i7-2600K / AMD Ryzen 5 1400</li>
                  <li><span>Memory:</span> 16 GB RAM</li>
                  <li><span>Graphics:</span> NVIDIA® GeForce® GTX 970 / AMD Radeon R9 390X or better</li>
                  <li><span>DirectX:</span> Version 12</li>
                  <li><span>Network:</span> Broadband Internet connection</li>
                  <li><span>Storage:</span> 50 GB available space</li>
                  <li><span>Additional Notes:</span> Internet connection required to play, offers in-game purchases</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="reviews">
          <p>Reviews section</p>
        </section>
      </article>
    </div>
  )
}