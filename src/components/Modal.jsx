function Modal(props) {
    let display = props.display;
    {!display && (
        display = 'none')}
    console.log(display)
    return (
        <>
            <div style={{ display: display }}>
                <span>&times;</span>
                <p>Some text in the Modal..</p>
            </div>
        </>
    )
}
export default Modal