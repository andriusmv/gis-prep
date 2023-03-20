import Link from 'next/link';
import { notFound } from 'next/navigation';
import supabase from '../../../utils/supabase';
import '../../globals.css';
import styles from '../page.module.css';

export async function VideoList() {
  const { data: video } = await supabase.from("video").select("*")
    
  if (!video) {
    notFound();
  }

  return (
    <>
    <h3>
      Disfruta de estos {''} tutoriales gratuitos 👇
    </h3>
      {video.map((video) => (
        <div key={video.id} className={styles.containerfull}>
    <Link href={`/video/${video.id}`} className={styles.cardmodules}>
      <p>{video.title}</p>
      <p>{video.duration}</p>
    </Link>
    </div>
    
          ))}
    </>
      );}
  
export default async function VideoLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const data = await VideoList();
  return (
    
  <div className={styles.sidebar}>
  <aside className={styles.sidebar__sidebar}>
    
{data}
    
  </aside>
  <main className={styles.sidebar__main}>{children}</main>
  </div>
  );
}