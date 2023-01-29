import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps } from 'next'
import Card from '../components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home({characters}:any) {
  return (
    <>
      <Head>
        <title>Rick & Morty</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.flexContainer}>
        {characters.results.map(
                (character:any)=>{
                  return <Card key={character.id} name={character.name}/>
                  }
                  )}
        </div>
              
              
      </main>
    </>
  )
}

export const getServerSideProps : GetServerSideProps =async (params:any) => {
  const url = 'https://rickandmortyapi.com/api/character'
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  return {
    props : {
      characters : data
    }
  }
}

