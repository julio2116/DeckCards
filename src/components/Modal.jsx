import styles from '../components/modalStyles.module.css'

function Modal(props) {

    let display = props.display;
    {!display && (
        display = 'none')}

    return (
        <>
            <div style={{ display: display }} className={styles.modal} >
                <span>&times;</span>
                <p>Some text in the Modal..</p>
            </div>
        </>
    )
}
export default Modal