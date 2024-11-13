import styles from '../components/allCardsStyles.module.css'
import Card from '../components/Card.jsx'
import Modal from '../components/Modal.jsx'

const AllCards = () => {
    let array = [];
    for(let i = 0; i < 5; i++){
        array.push(i);
    }
    var display = 'block'
    return(
        <>
            <div className={styles.container} style={{maxWidth:`${(array.length-1)*150+250}px`, height:`420px`}}>
                {array.map((number, index) => (
                    <Card key={index} positionLeft={`${index*150}px`} />
                    
                ))}
            </div>
            <Modal display= {display}/>
        </>
    )
}
export default AllCards