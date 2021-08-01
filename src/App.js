import Provider from './Provider'
import Modal from './components/modal/Modal'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import SideBar from './components/sidebar/SideBar'
import "./styles.css"

/**
 * TODO:
 * 
 * move sidebar to left side (icon too)?
 * 
 * profile dropdown: profile, messages
 * 
 * make thin list view (fa-list)
 * 
 * make game page a full screen modal?
 * 
 * tooltip slideshow fade using display code from game page
 * 
 * slideshow to game page, with dot buttons or thumbnails 
 * 
 * style sidebar scrollbar
 *
 * linkedin "recent" sticky sidebar for recently viewed games
 *  
 * give more padding or something to list article body
 * 
 * filter function (filter via sql)
 * 
 * when closing filter labels, need to refresh data
 * 
 * BUG: if you remove filters by clicking them directly (above the list)
 * it does not remove highlighting from sidebar
 * 
 * use floats in header. float logo left, nav right, and center form margin 0 auto 
 * 
 * share modal
 * 
 * make comments section for list item page.
 * 
 * recently viewed section
 * 
 * Achievements/badges levels, for purcases, reviews, dev badge etc.
 */

export default () => 
  <Provider>
    <Modal />
    <Header />
    <Main />
    <Footer />
    <SideBar />
  </Provider>