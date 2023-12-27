import styles from '../styles/Door.module.css'

export default function Door(props) {
  const chosed = props.chosed ? styles.chosen : ''

  return (
    <div className={styles.area}>
      <div className={`${styles.frame} ${chosed}`}>
        <div className={styles.door}>
          <div className={styles.number}>3</div>
          <div className={styles.nob}></div>
        </div>
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}
