import Provider from './Provider'
import Modal from './components/modal/Modal'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import SideBar from './components/sidebar/SideBar'
import "./styles.css"

/**
 * fix hover functionality. (useEffect issue)
 * 
 * make list item page.
 * 
 * make comments section for list item page.
 * 
 * BUG: if you remove filters by clicking them directly (above the list)
 * it does not remove highlighting from sidebar
 * 
 * BUG: search lists by search term. how to get back to regular list?
 * (home button doesnt refresh because the state data has changed)
 * 
 */

export default () => 
  <Provider>
    <Modal />
    <Header />
    <Main />
    <Footer />
    <SideBar />
  </Provider>