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
 * Cart Mobile design
 * Sign in mobile design (drop "Forgot Password" down)
 * Hide grid button in mobile view
 * 
 * 
 * filter function
 * 
 * when close filter labels need to refresh data
 * 
 * grid display
 * 
 * BUG: if you remove filters by clicking them directly (above the list)
 * it does not remove highlighting from sidebar
 * 
 * fix hover functionality. (useEffect issue)
 * second item in list doesnt slide through images
 * 
 * move genre buttons to tooltip, and replace with platform icons
 * 
 * make comments section for list item page.
 * 
 * 
 * BUG: search lists by search term. how to get back to regular list?
 * (home button doesnt refresh because the state data has changed)
 * 
 * 
 * cart/ cart icon shouldnt display unless logged in.
 * login icon shouldnt toggle with upload, it should
 * toggle with profile, use user (no circle) icon
 */

export default () => 
  <Provider>
    <Modal />
    <Header />
    <Main />
    <Footer />
    <SideBar />
  </Provider>