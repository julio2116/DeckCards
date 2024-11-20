import styles from '../components/cardStyles.module.css'
import { useContext } from "react";
import Context from '../components/Context.js';

const Card = (props) => {
    let [display, setDisplay] = useContext(Context);

    return (
        <>
            <div className={styles.card} style={{ left: `${props.positionLeft}` }}onClick={() => {setDisplay('flex')}}>
            </div>
        </>
    )
}
export default Card