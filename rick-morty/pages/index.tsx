import Head from 'next/head'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next'
import Card from '../components/Card'
import Pagination from '@/components/Pagination'
import { SyntheticEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// const inter = Inter({ subsets: ['latin'] })



export default function Home({characters, infos}:any) {
  const [currentPage, setCurrentPage] = useState(1)
  const [query, setQuery] = useState('')
  const router = useRouter()

  const buttonHandler = (e:any) => router.push('/?page=' + e.target.value);
  const putQuery = (e:any) => setQuery(e.target.value);
  const searchQuery = (e:any) => {
    if (e.key ==='Enter'){
      // console.log(query)
      router.push('/?name=' + query);
    }}

  return (
    <>
      <Head>
        <title>Rick & Morty | Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <input className={styles.searchBox} type="text" onChange={putQuery} onKeyDown={searchQuery} placeholder='Search for characters here..........'/>
        <div className={styles.flexContainer}>
        {characters.map(
                (character:any)=>{
                  return <Link href={String(character.id)} ><Card 
                  key={character.id} 
                  name={character.name} 
                  species={character.species}
                  type={character.type}
                  gender={character.gender}
                  image={character.image}/></Link>
                  }
                  )}
        </div>
        <div>
          <Pagination key={infos.count} totalPage={infos.pages} currentPage={currentPage} buttonHandler={buttonHandler}/>
      </div>
      </main>
      
    </>
  )
}



export const getServerSideProps : GetServerSideProps = async (context:any) => {
  
  var page = context.query.page
  var url = 'https://rickandmortyapi.com/api/character/?page=' + String(page)
  
  // console.log(context.query.page)
  if (context.query.name) {
    page = context.query.name
    url = 'https://rickandmortyapi.com/api/character/?name=' + String(page)
  }
  const response = await fetch(url)
  const data = await response.json()
  console.log(data.info)
  return {
    props : {
      characters : data.results,
      infos: data.info
    }
  }
}

