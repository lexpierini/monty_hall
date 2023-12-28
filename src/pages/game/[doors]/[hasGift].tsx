import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../../styles/Game.module.css'
import Door from '../../../components/Door'
import { addDoors, updateDoors } from '../../../functions/doors'

export default function Game() {
  const router = useRouter()
  const [doors, setDoors] = useState([])

  useEffect(() => {
    const doors = +router.query.doors
    const hasGift = +router.query.hasGift
    setDoors(addDoors(doors, hasGift))
  }, [router?.query])

  const renderDoors = () =>
    doors.map((door) => (
      <Door
        key={door.number}
        value={door}
        onChange={(newDoor) => setDoors(updateDoors(doors, newDoor))}
      />
    ))

  return (
    <div id={styles.game}>
      <div className={styles.doors}>{renderDoors()}</div>
      <div className={styles.buttons}>
        <Link href="/">
          <button>Restart</button>
        </Link>
      </div>
    </div>
  )
}