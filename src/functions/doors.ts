import DoorModel from '../model/door'

export function addDoors(quantity: number, hasGift: number): DoorModel[] {
  return Array.from({ length: quantity }, (_, i) => {
    const number = i + 1
    const _hasGift = number === hasGift
    return new DoorModel(number, _hasGift)
  })
}

export function updateDoors(doors: DoorModel[], updatedDoor: DoorModel): DoorModel[] {
  return doors.map((currentDoor) => {
    const isSameDoor = currentDoor.number === updatedDoor.number

    if (isSameDoor) {
      return updatedDoor
    } else {
      return updatedDoor.opened ? currentDoor : currentDoor.unChosen()
    }
  })
}
