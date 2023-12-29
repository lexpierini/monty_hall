import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../../styles/Game.module.css'
import Door from '../../../components/Door'
import { addDoors, updateDoors } from '../../../functions/doors'

export default function Game() {
  const router = useRouter()
  const [doors, setDoors] = useState([])

  const isValid = useMemo(() => {
    const doorsQty = +router.query.doors
    const hasGift = +router.query.hasGift

    const isValidQtyDoors = doorsQty >= 3 && doorsQty <= 10
    const isValidDoorGift = hasGift >= 1 && hasGift <= doorsQty

    if (isValidQtyDoors && isValidDoorGift) return true
    else return false
  }, [router?.query])

  useEffect(() => {
    const doorsQty = +router.query.doors
    const hasGift = +router.query.hasGift
    setDoors(addDoors(doorsQty, hasGift))
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
      <div className={styles.doors}>{isValid ? renderDoors() : <h1>Invalid values</h1>}</div>
      <div className={styles.buttons}>
        <Link href="/" passHref>
          <button>Restart</button>
        </Link>
      </div>
    </div>
  )
}
