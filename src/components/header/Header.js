import SearchForm from './SearchForm'
import LoginButton from './LoginButton'
import CartButton from './CartButton'
import SideBarButton from './SideBarButton'
import styles from './header.module.css'

export default () => 
  <header className={styles.header}>
    {/* remove h1 and from css */}
    <h1>
      <a href="/">
        <img src="" alt="logo" />
      </a>
    </h1>
    <SearchForm />
    <nav className={styles.nav}>
      <LoginButton />
      <CartButton />
      <SideBarButton />
    </nav>
  </header>