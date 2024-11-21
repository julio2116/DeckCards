import styles from '../components/allCardsStyles.module.css'
import Card from '../components/Card.jsx'
import Modal from '../components/Modal.jsx'
import { useContext } from "react";
import Context from '../components/Context.js';

const AllCards = () => {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array.push(i);
    }

    let [varGlobal, setVar] = useContext(Context);

    return (
        <>
            <div className={styles.container} style={{ maxWidth: `${(array.length - 1) * 170 + 210}px`, height: `310px` }}>
                {array.map((number, index) => (
                    <Card key={index} positionLeft={`${index * 170}px`} i={index} />
                ))}
            </div>
            <Modal display={varGlobal.display} />
            {/* {console.log(varGlobal.display)} */}
        </>
    )
}
export default AllCards