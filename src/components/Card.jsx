import styles from '../components/cardStyles.module.css'

const Card = (props) => {
    return(
        <>
            <div className={styles.card} style={{left:`${props.positionLeft}`}} ></div>
        </>
    )
}
export default Card