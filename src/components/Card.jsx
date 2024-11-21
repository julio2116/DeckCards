import styles from '../components/cardStyles.module.css'
import { useContext } from "react";
import Context from '../components/Context.js';

const Card = (props) => {
    let [varGlobal, setVar] = useContext(Context);
    let {display1} = varGlobal;

    return (
        <>
            <div className={styles.card} style={{ left: `${props.positionLeft}` }} onClick={() => {setVar(varGlobal= {display: 'flex'})}}></div>
            {/* {console.log(varGlobal.display)} */}
        </>
    )
}
export default Card