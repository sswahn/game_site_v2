

export default () => {

  const openSideBar = event => {
    document.getElementById("sidebar").style.width = '250px'
    document.body.style.marginLeft = '250px'
  }

  return (
    <button onClick={openSideBar}>
      {/* <i className="fas fa-bars"></i> */}
    </button>
  )
}