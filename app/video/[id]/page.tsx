import supabase from '../../../utils/supabase';
import { notFound } from 'next/navigation';
import Link from "next/link";
import React from "react";
import styles from '../page.module.css';
import Player from '../../player';

export async function generateStaticParams() {
    const { data: module } = await supabase.from("module").select("id");

    return module?.map(({ id }) => ({
      id,
    }));
  }
  
  export default async function Tutorial({
    params: { id },
  }: {
    params: { id: string };
  }) {
    const { data: module } = await supabase
      .from("tutorial")
      .select()
      .match({ id })
      .select();
  
    if (!module) {
      notFound();
    }
  
    return (
  <>
  {module.map((tutorial) => (
  <div key={tutorial.id} className={styles.videocontainer}>
    
    <iframe className={styles.video} src={`https://www.youtube.com/embed/${tutorial.embed}`} frameBorder={0} allowFullScreen/>
    
    </div>
        ))}
  </>
    );
}