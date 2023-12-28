import { useState } from 'react'
import DoorModel from '../model/door'
import Door from '../components/Door'
import Gift from '../components/Gift'
import { addDoors, updateDoors } from '../functions/doors'

export default function Home() {
  const [doors, setDoors] = useState(addDoors(3, 2))

  const renderDoors = () =>
    doors.map((door) => (
      <Door
        key={door.number}
        value={door}
        onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
      />
    ))

  return <div style={{ display: 'flex' }}>{renderDoors()}</div>
}
