import styles from '@/styles/Card.module.css'
export default function Card(props:any){
    return (
        <div className={styles.outerLayer}>
            <div className={styles.title}><h2>{props.name}</h2></div>
            {/* image */}
            <div className={styles.info}>
                
                <p>status</p>
                <p>species</p>
                <p>type</p>
                <p>gender</p>
            </div>
            
        </div>
    );
}