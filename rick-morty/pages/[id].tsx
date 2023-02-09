import { GetServerSideProps, NextPage } from "next"
import Card from "../components/Card"
import CardBack from "../components/CardBack"
import styles from '@/styles/DetailView.module.css'
import { Character, ErrorTypes, Result } from "@/types"
import Error from "next/error";

const CharacterDetail:NextPage<{characters:Result, error:ErrorTypes}> = ({characters, error}) => {
    if (error){
        return <Error statusCode={error.statusCode} title={error.message} />;
      } 
    return (
        <div className={styles.flexContainer}>
            {/* Frontside of the card */}
            <Card 
                  key={characters.id} 
                  name={characters.name}
                  status={characters.status} 
                  species={characters.species}
                  type={characters.type}
                  gender={characters.gender}
                  image={characters.image}/>

            {/* url of all episodes the character are linked to */}
            <div className={styles.episodeList}>
                <h3>Episode List</h3>
                <ul>
                {characters.episode.map((url) => {
                    return (<li key={url}><a href={url}>{url}</a></li>)
                })}
                </ul>
            </div>

            {/* backside of the card */}
            <CardBack
                location_name={characters.location.name}
                location_url={characters.location.url}  
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
    const data:Character = await response.json()
    // console.log(data)
    return {
        props: {
            characters: data
        }
    }
}

export default CharacterDetail;