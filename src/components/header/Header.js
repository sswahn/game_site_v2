import SearchForm from './SearchForm'
import GamesButton from './GamesButton'
import LoginButton from './LoginButton'
import CartButton from './CartButton'
import SideBarButton from './SideBarButton'
import styles from './header.module.css'

export default () => 
  <header className={styles.header}>
    <h1>
      <a href="/">
        <img src="" alt="logo" />
      </a>
    </h1>
    <SearchForm />
    <nav className={styles.nav}>
      {/** <GamesButton /> */}
      <LoginButton />
      <CartButton />
      <SideBarButton />
    </nav>
  </header>