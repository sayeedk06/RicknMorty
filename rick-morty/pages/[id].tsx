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

            <CardBack
                location_name={props.location.name}
                location_url={props.location.url}  
            />
          {/* <p>{props.episode}</p> */}

          {/* <Link href='/'>Go back</Link> */}
        </div>
    )
}





export const getServerSideProps: GetServerSideProps =  async(context) => {


    const url = 'https://rickandmortyapi.com/api/character/'
    const response = await fetch(url + context.query.id)
    const data = await response.json()
    

    console.log(data)
    return {
        props: data
    }
}