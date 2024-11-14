import styles from '../components/allCardsStyles.module.css'
import Card from '../components/Card.jsx'
import Modal from '../components/Modal.jsx'
import { useContext } from "react";
import Context from '../components/Context.js';

const AllCards = () => {
    let array = [];
    for (let i = 0; i < 8; i++) {
        array.push(i);
    }

    let [display, setDisplay] = useContext(Context);

    return (
        <>
            <div>
                <div className={styles.container} style={{ maxWidth: `${(array.length - 1) * 170 + 250}px`, height: `420px` }}>
                    {array.map((number, index) => (
                        <Card key={index} positionLeft={`${index * 170}px`} i={index} />

                    ))}
                </div>
                <div className={styles.a} style={{display:`${display}`}} onClick={() => setDisplay('none')}></div>
                <Modal display={display} />
            </div>

        </>
    )
}
export default AllCards