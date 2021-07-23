import styles from './footer.module.css'

export default () => {
  return (
    <footer className={styles.footer}>
      <div>&copy; {new Date().getFullYear()}</div>
    </footer>
  )
}