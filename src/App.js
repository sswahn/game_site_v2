import Provider from './Provider'
import Modal from './components/modal/Modal'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import "./styles.css"

export default () => 
  <Provider>
    <Modal />
    <Header />
    <Main />
    <Footer />
  </Provider>