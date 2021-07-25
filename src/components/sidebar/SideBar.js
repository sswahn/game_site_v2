import MobileMenu from './MobileMenu'
import styles from './sidebar.module.css'

export default () => {
  return (
    <nav id="sidebar" className={styles.sidebar}>
      {window.innerWidth <= 600 ? <MobileMenu /> : <></>}
      <div>
        <div>
          <div>Category</div>
          <button>Featured</button>
          <button>New Releases</button>
          <button>On Sale</button>
          <button>Top Sellers</button>
          <button>Recommended</button>
        </div>
        <div>
          <div>Genre</div>
          <button>Action</button>
          <button>Adventure</button>
          <button>Horror</button>
          <button>RPG</button>
          <button>Shooters</button>
          <button>Sports &amp; racing</button>
          <button>Strategy</button>
          <button>Survival</button>
        </div>
        <div>
          <div>Platform</div>
          <button>Windows</button>
          <button>Mac OS X</button>
          <button>Linux</button>
          <button>Android</button>
          <button>iOS</button>
          <button>Web</button>
        </div>
        <div>
          <div>Price</div>
          <button>Free</button>
          <button>$5 or less</button>
          <button>$10 or less</button>
          <button>$15 or less</button>
          <button>$20 or less</button>
          <button>$25 or less</button>
        </div>
      </div>
    </nav>
  )
}