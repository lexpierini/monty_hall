import styles from '../styles/Card.module.css'

type CardProps = {
  bgcolor?: string
  children?: any
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.card} style={{ backgroundColor: props.bgcolor ?? '#fff' }}>
      {props.children}
    </div>
  )
}
