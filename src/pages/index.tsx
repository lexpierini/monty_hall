import { useState } from 'react'
import styles from '../styles/Form.module.css'
import Card from '../components/Card'
import Link from 'next/link'
import NumberInput from '../components/NumberInput'

export default function Form() {
  const [doorsNumber, setDoorsNumber] = useState(3)
  const [doorWithGift, setDoorWithGift] = useState(2)

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            text="Number of doors"
            value={doorsNumber}
            onChange={(newValue) => setDoorsNumber(newValue)}
          />
        </Card>
      </div>

      <div>
        <Card>
          <NumberInput
            text="Door with a gift"
            value={doorWithGift}
            onChange={(newValue) => setDoorWithGift(newValue)}
          />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${doorsNumber}/${doorWithGift}`} passHref>
            <h2 className={styles.link}>Start</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
