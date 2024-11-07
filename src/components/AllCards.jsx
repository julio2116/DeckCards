import styles from '../components/allCardsStyles.module.css'
import Card from '../components/Card.jsx'

const AllCards = () => {
    let array = [];
    for(let i = 0; i < 5; i++){
        array.push(i);
    }
    return(
        <>
            <div className={styles.container} style={{maxWidth:`${(array.length-1)*215}px`, height:`420px`}}>
                {array.map((number, index) => (
                    <Card key={index} positionLeft={`${index*150}px`} />
                    
                ))}
            </div> 
        </>
    )
}
export default AllCards