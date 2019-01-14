import Home from './home'


export function getInitStore () {
  return {
    home: new Home()
  }
}

