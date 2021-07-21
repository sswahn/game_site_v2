import Search from './Search'
import GamesButton from './GamesButton'
import LoginButton from './LoginButton'
import CartButton from './CartButton'
import styles from './header.module.css'

export default () => {
  return (
    <header className={styles.header}>
      <h1>
        <a href="/">
          <img src="" alt="logo" />
        </a>
      </h1>
      <Search />
      <nav className={styles.nav}>
        <GamesButton />
        <LoginButton />
        <CartButton />
      </nav>
    </header>
  )
}