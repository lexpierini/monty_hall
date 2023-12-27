import React from 'react'
import DoorModel from '../model/door'
import styles from '../styles/Door.module.css'

interface DoorProps {
  door: DoorModel
}

export default function Door(props: DoorProps) {
  const { door } = props
  const chosed = door.chosed ? styles.chosen : ''

  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${chosed}`}>
        <div className={styles.door}>
          <div className={styles.number}>{door.number}</div>
          <div className={styles.nob}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}
