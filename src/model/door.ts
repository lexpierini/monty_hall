export default class DoorModel {
  #number: number
  #hasGift: boolean
  #chosed: boolean
  #opened: boolean

  constructor(number: number, hasGift = false, chosed = false, opened = false) {
    this.#number = number
    this.#hasGift = hasGift
    this.#chosed = chosed
    this.#opened = opened
  }

  get number() {
    return this.#number
  }

  get hasGift() {
    return this.#hasGift
  }

  get chosed() {
    return this.#chosed
  }

  get opened() {
    return this.#opened
  }

  get closed() {
    return !this.#opened
  }

  unChosen() {
    const chosed = false
    return new DoorModel(this.number, this.hasGift, chosed, this.opened)
  }

  changeChoice() {
    const chosed = !this.chosed
    return new DoorModel(this.number, this.hasGift, chosed, this.opened)
  }

  open() {
    const opened = true
    return new DoorModel(this.number, this.hasGift, this.chosed, opened)
  }
}
