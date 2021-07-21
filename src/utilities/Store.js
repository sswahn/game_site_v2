
const Store = () => {
  const get = name => {
    return JSON.parse(localStorage.getItem(name))
  }
  const set = (name, value) => {
    JSON.stringify(localStorage.setItem(name, value))
  }
  const remove = name => {
    localStorage.removeItem(name)
  }

  return { get, set, remove }
}

export default Store()