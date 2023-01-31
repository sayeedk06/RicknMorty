import styles from '@/styles/Card.module.css'
import Image from 'next/image';
import rick from '../assets/images/rick.jpg'

export default function CardBack(props:any){
    // console.log(props.image)
    return (
        <div className={styles.outerLayer}>
            <div className={styles.innerLayer}>
                <div className={styles.title}><h2>{props.location_name}</h2></div>
                <Image className={styles.image} src={rick} width={250} height={250} alt='Picture of Character'/>
                <div className={styles.info}>
                
{/* 
                    <p>{props.location_url}</p> */}
                    
                </div>
            </div>
        </div>
    );
}