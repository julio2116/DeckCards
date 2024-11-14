import styles from '../components/modalStyles.module.css'
import { useContext } from "react";
import Context from '../components/Context.js';

function Modal() {

    let [display, setDisplay] = useContext(Context);

    return (
        <>
        <div style={{ display: display }} className={styles.modalBox}>
            <div className={styles.modal}>
                <span className={styles.modalText}>Some text in the Modal..</span>
                <span className={styles.closeModal} onClick={() => setDisplay('none')} >&times;</span>
            </div>
        </div>
        </>
    )
}
export default Modal