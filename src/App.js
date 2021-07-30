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
 * slideshow to game page, with dot buttons or thumbnails 
 * 
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
 * make tooltip slider fade instead of slide
 * 
 * make comments section for list item page.
 * 
 * recently viewed section
 * 
 * Achievements.
 */

export default () => 
  <Provider>
    <Modal />
    <Header />
    <Main />
    <Footer />
    <SideBar />
  </Provider>