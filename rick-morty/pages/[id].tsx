import { GetServerSideProps } from "next"
import Card from "../components/Card"
import Link from "next/link"
export default function CharacterDetail(props:any) {
    return (
        <div>
            {/* {characterDetails.map((detail:any) => {
                return <h1>{detail.id}</h1>
            })} */}

          <p>{props.name}</p> 
          <p>{props.species}</p>
          <p>{props.gender}</p>
          <p>{props.type}</p>
          <p>{props.location.name}</p>
          <p>{props.location.url}</p>
          <p>{props.episode}</p>

          <Link href='/'>Go back</Link>
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