import supabase from '../../../utils/supabase';
import { notFound } from 'next/navigation';
import Link from "next/link";
import React from "react";
import styles from '../page.module.css';

export async function generateStaticParams() {
    const { data: video } = await supabase.from("video").select("id");

    return video?.map(({ id }) => ({
      id,
    }));
  }
  
  export default async function VideoPage({
    params: { id },
  }: {
    params: { id: string };
  }) {
    const { data: video } = await supabase
      .from("video")
      .select()
      .match({ id })
      .select();
  
    if (!video) {
      notFound();
    }
  
    return (
  <>
  {video.map((video) => (
  <div key={video.id} className={styles.videocontainer}>
    
    <iframe className={styles.video} src={`https://www.youtube.com/embed/${video.id}`} frameBorder={0} allowFullScreen/>
    
    </div>
        ))}
  </>
    );
}