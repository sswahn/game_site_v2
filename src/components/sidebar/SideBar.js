import MobileMenu from './MobileMenu'

export default () => {
  return (
    <nav id="sidebar">
      {window.innerWidth <= 500 && <MobileMenu />}
      <div>
        {/* search filter checkboxes etc. */}
      </div>
    </nav>
  )
}