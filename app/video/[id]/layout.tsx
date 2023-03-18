import Link from 'next/link';
import { notFound } from 'next/navigation';
import supabase from '../../../utils/supabase';
import '../../globals.css';
import styles from '../page.module.css';

export async function getData() {
  const { data: tutorial } = await supabase.from("tutorial")
  .select("*")
    
  if (!tutorial) {
    notFound();
  }

  return (
    <>
    <h3>
      Disfruta de estos {''} tutoriales gratuitos 👇
    </h3>
      {tutorial.map((tutorial) => (
        <div key={tutorial.id} className={styles.containerfull}>
    <Link href={`/tutoriales/${tutorial.id}`} className={styles.cardmodules}>
      <p>{tutorial.title}</p>
      <p>{tutorial.duration}</p>
    </Link>
    </div>
    
          ))}
    </>
      );}
  
export default async function ModulesLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const data = await getData();
  return (
    
  <div className={styles.sidebar}>
  <aside className={styles.sidebar__sidebar}>
    
{data}
    
  </aside>
  <main className={styles.sidebar__main}>{children}</main>
  </div>
  );
}

{/* <div className={styles.sidebar}>
      <aside className={styles.sidebar__sidebar}>
    <ul>{module.map((module) => (
      <li key={module.id}>
        <h2>{module.title}</h2>
      
      </li>))}  
      </ul>
      </aside>
      <main className={styles.sidebar__main}>
      <div className={styles.playerWrapper}>
      {module.map((module) => (
      <Player  
          playbackId={module.video_url}
          placeholder="fO0101O00KgKEVbWLe2tY552HMcQ02XmnuvFvOgAIvCStQI"
          aspectRatio={"16/9"}
          />))} 
      </div>
    </main>
      </div> */}