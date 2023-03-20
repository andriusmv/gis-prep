import supabase from '../../utils/supabase';
import { notFound } from 'next/navigation';
import Link from "next/link";
import React from "react";
import styles from '../page.module.css';

export async function generateStaticParams() {
    const { data: exam } = await supabase.from("exam").select("id");

    return exam?.map(({ id }) => ({
      id,
    }));
  }
  
  export default async function examPage({
    params: { id },
  }: {
    params: { id: string };
  }) {
    const { data: exam } = await supabase
      .from("exam")
      .select()
      .match({ id })
      .select();
  
    if (!exam) {
      notFound();
    }
  
    return (
  <>
  {exam.map((exam) => (
  <div key={exam.id} className={styles.videocontainer}>
    
    <iframe className={styles.video} src={`https://www.youtube.com/embed/${exam.id}`} frameBorder={0} allowFullScreen/>
    
    </div>
        ))}
  </>
    );
}