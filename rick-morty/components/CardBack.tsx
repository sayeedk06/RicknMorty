import styles from '@/styles/Card.module.css'
import { CardBackprops } from '@/types';
import Image from 'next/image';
import rick from '../assets/images/ricknmorty.jpg'

export default function CardBack(props:CardBackprops){
    // console.log(props.image)
    return (
        <div className={styles.outerLayer}>
            <div className={styles.innerLayer}>
                <div className={styles.title}><h2>{props.location_name}</h2></div>
                <Image className={styles.image} src={rick} width={200} height={300} alt='Picture of Character'/>
                <div className={styles.info}>      
                </div>
            </div>
        </div>
    );
}