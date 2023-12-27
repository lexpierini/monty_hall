export default class DoorModel {
  #number: number
  #haveGift: boolean
  #chosed: boolean
  #opened: boolean

  constructor(
    number: number,
    haveGift = false,
    chosed = false,
    opened = false,
  ) {
    this.#number = number
    this.#haveGift = haveGift
    this.#chosed = chosed
    this.#opened = opened
  }

  get number() {
    return this.#number
  }

  get haveGift() {
    return this.#haveGift
  }

  get chosed() {
    return this.#chosed
  }

  get opened() {
    return this.#opened
  }

  unChosen() {
    const chosed = false
    return new DoorModel(this.number, this.haveGift, chosed, this.opened)
  }

  changeChoice() {
    const chosed = !this.chosed
    return new DoorModel(this.number, this.haveGift, chosed, this.opened)
  }

  open() {
    const opened = true
    return new DoorModel(this.number, this.haveGift, this.chosed, opened)
  }
}
