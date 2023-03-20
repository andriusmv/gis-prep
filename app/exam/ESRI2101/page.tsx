import supabase from '../../../utils/supabase';
import { notFound } from 'next/navigation';
import Link from "next/link";
import React from "react";
import styles from '../page.module.css';

export default async function Esri2101() {
  const { data: video } = await supabase.from("video").select().or('tag.cs.{ESRI2101}');
  if (!video) {
    return <p>No posts found.</p>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
        {video.map((video) => (
        <><h1 key={video.id}>
                {video.id}
            </h1><Link key={video.id} href={`/tag/${video.id}`} className={styles.card}>
                    <h2>{video.title}</h2>
                    <p>{video.subtitle}</p>
                    <p>{video.tag}</p>
                </Link></>))}
          
        </div>
        </main>
        </div>
    );
    }