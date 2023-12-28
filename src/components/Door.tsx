import React from 'react'
import DoorModel from '../model/door'
import styles from '../styles/Door.module.css'

interface DoorProps {
  value: DoorModel
  onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
  const door = props.value
  const chosed = door.chosed && !door.opened ? styles.chosen : ''

  const changeChoice = (e) => {
    props.onChange(door.changeChoice())
  }

  const open = (e) => {
    e.stopPropagation()
    props.onChange(door.open())
  }

  const renderDoor = () => (
    <div className={styles.door}>
      <div className={styles.number}>{door.number}</div>
      <div className={styles.nob} onClick={open}></div>
    </div>
  )

  return (
    <div className={styles.area} onClick={changeChoice}>
      <div className={`${styles.frame} ${chosed}`}>
        {!door.opened && renderDoor()}
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}
