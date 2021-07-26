import { useContext, useState, useEffect } from 'react'
import { Context } from '../../Provider'
import store from '../../utilities/Store'
import styles from './main.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

export default () => {
  const [context, dispatch] = useContext(Context)
  const [state, setState] = useState({ 
    data: undefined,
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
       ? item.style.background = '#666'
       : item.style.background = '#444'
    }
    const content = document.getElementById('tab-content')
    for (const item of content.children) {
      item.id === tab ? item.style.display = 'block' : item.style.display = 'none' 
    }
  }

  const filterByGenre = event => {
    const type = event.target.id
    if (context.filters.includes(type)) {
      return
    }
    const storage = store.get('storage')
    const data = storage.filter(game => game.genre.includes(type))
    dispatch({ type: 'data',  payload: data })
    dispatch({ type: 'filters', payload: [...context.filters, type] })
  }

  const addToCart = event => {

  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className={styles.game}>
      {!state.data ? 'Loading...' :
      <article>
        <header id="header">
          <h1>{state.data.title}</h1>
          <video id="trailer" className="" src={state.data.trailer} 
            playsInline="true" 
            poster={state.data.logo} 
            preload="none" 
            controlsList="nodownload" 
            controls>
          </video>
          <div> 
            <img src={state.data.logo} alt={state.data.title} />
            <button onClick={playTrailer} title="Play Trailer">
              <FontAwesomeIcon icon={faPlayCircle} />
            </button>
          </div>
        </header>
        <section className={styles.subheader}>
          <div>
            <p>Developer: <span>{state.data.developer}</span></p>
            <p>Rating: <span>{state.data.rating}</span></p>
            <p>Genre: {state.data.genre.map(type => <button key={type} id={type} onClick={filterByGenre}>{type}</button>)}</p>
            <p>Release date: <span>{state.data.date}</span></p>
          </div>
          <button onClick={addToCart}>Add to cart</button> 
        </section>
        <section>
          {/* show the most recent announcement
            and a "view more" link to modal list
          */}
          <button>Open Announcements modal</button> 
        </section>
        <section>
          <nav className={styles.tabs}>
            <button onClick={openTab} style={{background:'#666'}}>About</button>
            <button onClick={openTab}>Updates</button>
            <button onClick={openTab}>Requirements</button>
          </nav>
          <div id="tab-content" className={styles.tabcontent}>
            <div id="about" style={{display:'block'}}>
              <h3>About</h3>
              {/* <p>{state.data.description.about}</p> */}
              <p>{state.data.description.about}</p>
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
        <section>
         meta section, esrb etc. external links (game/dev website),
        </section>
        <section className="reviews">
          <p>Reviews section</p>
        </section>
      </article>
      }
    </div>
  )
}