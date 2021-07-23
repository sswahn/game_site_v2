
const Store = () => {
  const get = name => {
    return JSON.parse(sessionStorage.getItem(name))
  }
  const set = (name, value) => {
    sessionStorage.setItem(name, JSON.stringify(value))
  }
  const remove = name => {
    sessionStorage.removeItem(name)
  }

  return { get, set, remove }
}

export default Store()