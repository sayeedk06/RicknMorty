import { GetServerSideProps } from "next"
import Card from "../components/Card"
import CardBack from "../components/CardBack"
import styles from '@/styles/DetailView.module.css'
import { Errors, Result } from "@/types"
import Error from "next/error";

export default function CharacterDetail(props:Result, {error}:Errors) {
    if (error){
        return <Error statusCode={error.statusCode} title={error.message} />;
      } 
    return (
        <div className={styles.flexContainer}>
            {/* Frontside of the card */}
            <Card 
                  key={props.id} 
                  name={props.name}
                  status={props.status} 
                  species={props.species}
                  type={props.type}
                  gender={props.gender}
                  image={props.image}/>

            {/* url of all episodes the character are linked to */}
            <div className={styles.episodeList}>
                <h3>Episode List</h3>
                <ul>
                {props.episode.map((url) => {
                    return (<li key={url}><a href={url}>{url}</a></li>)
                })}
                </ul>
            </div>

            {/* backside of the card */}
            <CardBack
                location_name={props.location.name}
                location_url={props.location.url}  
            />
        </div>
    )
}





export const getServerSideProps: GetServerSideProps =  async(context) => {


    const url = 'https://rickandmortyapi.com/api/character/'
    const response = await fetch(url + context.query.id)
    if (response.status === 404) {
        // console.log('error')
        return {
          props: {
            error: {
              statusCode: response.status,
              message: response.statusText 
          }
        }
    }
    }
    const data = await response.json()
    return {
        props: data
    }
}