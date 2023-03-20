import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import Link from 'next/link'
import supabase from '@/utils/supabase'

const inter = Inter({ subsets: ['latin'] })

export default async function TagPage() {
  const { data: entity } = await supabase.from("entity").select().or('tag.cs.{ESRI}');
  if (!entity) {
    return <p>No posts found.</p>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
        {entity.map((entity) => (
        <><h1 key={entity.id}>
                {entity.id}
            </h1><Link key={entity.id} href={`/tag/${entity.id}`} className={styles.card}>
                    <h2>{entity.title}</h2>
                    <p>{entity.subtitle}</p>
                    <p>{entity.tag}</p>
                </Link></>))}
          
        </div>
        </main>
        </div>
    );
    }