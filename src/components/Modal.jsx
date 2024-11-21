import styles from '../components/modalStyles.module.css'
import { useContext } from "react";
import Context from '../components/Context.js';

function Modal() {

    let [varGlobal, setVar] = useContext(Context);

    return (
        <>
            <div className={styles.bgScreen} style={{ display: varGlobal.display }} onClick={() => setVar(varGlobal= {display: 'none'})}></div>
            <div style={{ display: varGlobal.display }} >
                <div className={styles.modalBox}>
                <div className={styles.modal}>
                    <span className={styles.modalText}>Some text in the Modal..</span>
                    <span className={styles.closeModal} onClick={() => setVar(varGlobal= {display: 'none'})} >&times;</span>
                </div>
                </div>
            </div>
            {console.log(varGlobal)}
        </>
    )
}
export default Modal