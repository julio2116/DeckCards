import styles from '../components/cardStyles.module.css'

const Card = (props) => {
    return (
        <>
            <div className={styles.card} style={{ left: `${props.positionLeft}` }} onClick={() => {display = 'block'}}></div>
            {console.log(display)}
        </>
        
    )
}
export default Card