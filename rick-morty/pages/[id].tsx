import { GetServerSideProps } from "next"
import Card from "../components/Card"
import CardBack from "../components/CardBack"
import Link from "next/link"
import styles from '@/styles/DetailView.module.css'
export default function CharacterDetail(props:any) {
    return (
        <div className={styles.flexContainer}>
            <Card 
                  key={props.id} 
                  name={props.name} 
                  species={props.species}
                  type={props.type}
                  gender={props.gender}
                  image={props.image}/>
            <div className={styles.episodeList}>
                <h3>Episode List</h3>
                <ul>
                {props.episode.map((url:any) => {
                    return (<li key={url}><a href={url}>{url}</a></li>)
                })}
                </ul>
            </div>

            <CardBack
                key={props.id}
                location_name={props.location.name}
                location_url={props.location.url}  
            />
        </div>
    )
}





export const getServerSideProps: GetServerSideProps =  async(context) => {


    const url = 'https://rickandmortyapi.com/api/character/'
    const response = await fetch(url + context.query.id)
    const data = await response.json()
    return {
        props: data
    }
}