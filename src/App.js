import Provider from './Provider'
import Modal from './components/modal/Modal'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import SideBar from './components/sidebar/SideBar'
import "./styles.css"

/**
 * fix hover functionality. (useEffect issue)
 * make list item page.
 * 
 * style login modal
 * and cart modal
 * 
 * create click off close modal functionality
 */

export default () => 
  <Provider>
    <Modal />
    <Header />
    <Main />
    <Footer />
    <SideBar />
  </Provider>