import styles from '@/styles/Card.module.css'
import Image from 'next/image';


export default function Card(props:any){
    // console.log(props.image)
    return (
        <div className={styles.outerLayer}>
            <div className={styles.innerLayer}>
                <div className={styles.title}><h2>{props.name}</h2></div>
                <Image className={styles.image} src={props.image} width={200} height={200} alt='Picture of Character'/>
                <div className={styles.info}>
                
                    <p>{props.status}</p>
                    <p>Species: {props.species}</p>
                    <p>Type: {props.type? props.type: 'N/A'}</p>
                    <p>Gender: {props.gender}</p>
                </div>
            </div>
        </div>
    );
}