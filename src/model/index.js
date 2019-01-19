import Home from './home'


export const getInitStore = () => {
  return {
    home: new Home()
  }
}
