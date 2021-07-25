import SearchForm from './SearchForm'
import HomeButton from './HomeButton'
import LoginButton from './LoginButton'
import CartButton from './CartButton'
import SideBarButton from './SideBarButton'
import styles from './header.module.css'

export default () => 
  <header className={styles.header}>
    <a href="/">
      <img src="" alt="logo" />
    </a>
    <SearchForm />
    <nav className={styles.nav}>
      <HomeButton />
      <LoginButton />
      <CartButton />
      <SideBarButton />
    </nav>
  </header>