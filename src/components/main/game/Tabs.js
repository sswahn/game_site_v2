import styles from './game.module.css'

export default ({ data }) => {
  
  const openTab = event => {
    const tabs = event.target.parentElement
    const tab = event.target.textContent.toLowerCase()
    for (const item of tabs.children) {
      item.textContent.toLowerCase() === tab ? item.style.background = '#666' : item.style.background = '#444'
    }
    const content = document.getElementById('tab-content')
    for (const item of content.children) {
      item.id === tab ? item.style.display = 'block' : item.style.display = 'none' 
    }
  }
  
  return (
    <section>
      <nav className={styles.tabs}>
        <button onClick={openTab} style={{background:'#666'}}>About</button>
        {/* <button onClick={openTab}>Updates</button> */}
        <button onClick={openTab}>Requirements</button>
      </nav>
      <div id="tab-content" className={styles.tabcontent}>
        <div id="about" style={{display:'block'}}>
          <h3>About</h3>
          {/* <p>{data.description.about}</p> */}
          <p>{data.description.about}</p>
        </div>
        {/* <div id="updates">
          <h3>Updates</h3>
          <p>a list of updates</p>
        </div> */}
        <div id="requirements" className={styles.requirements}>
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
  )
}