import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import supabase from '@/utils/supabase'

const inter = Inter({ subsets: ['latin'] })

export default async function Video() {
  const { data: exam } = await supabase.from("exam").select()
  // .or('tag.cs.{GISCI}');
  if (!exam) {
    return <p>No posts found.</p>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.logo}>
          ¿Need help studying for a GIS certification exam?
        </p>
        <h1 className={styles.logo}>
          Prepare for
        </h1>
        <h1 className={styles.logo}>
          GIS exam
        </h1>
        <p className={styles.logo}>
        Curated list of YouTube videos for your exam.
        </p>
        <br/>
        <br/>
        <div>Search for exam
          <input />
        </div>
        <br/>
        <div className={styles.grid}>
        {exam.map((exam) => (
    <Link key={exam.id} href={`/video/${exam.id}`} className={styles.card}>
      <h2>{exam.title}</h2>
      <p>{exam.subtitle}</p>
      <p>{exam.tag}</p>
    </Link>))}
          
        </div>
        </main>
        
        <footer className={styles.footer}>
        <Link
          href="https://andresmoreno.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Escrito por {' '} 
          <span className={styles.logo}>
            AndrésMorenoVásquez
          </span>
          <div className={styles.avatar}><Image src="/amv-memoji.jpg" alt={'amv'} width="35" height="35"/></div>
          </Link>
      </footer>
    </div>
  )
}
