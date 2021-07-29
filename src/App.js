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
 * filter function (google tut)
 * 
 * when closing filter labels, need to refresh data
 * 
 * BUG: if you remove filters by clicking them directly (above the list)
 * it does not remove highlighting from sidebar
 * 
 * 
 * share modal
 * 
 * make comments section for list item page.
 * 
 * 
 * BUG: search lists by search term. how to get back to regular list?
 * (home button doesnt refresh because the state data has changed)
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