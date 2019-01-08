import { action, observable } from 'mobx'

export default class Home {
  @observable show

  @action
  changeShow () {
    this.show = true
  }

} 