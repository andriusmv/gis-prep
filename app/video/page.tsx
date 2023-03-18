import supabase from "@/utils/supabase";
import Link from "next/link";
import styles from './page.module.css'

export default async function Videos() {
  const { data: video } = await supabase.from("video").select("*");

  if (!video) {
    return <p>No posts found.</p>;
  }

  return( 
    <div>
      {video.map((video) => (
    <Link key={video.id} href={`/video/${video.id}`}>
      <h2>{video.title}</h2>
      <p>{video.subtitle}</p>
      <p>{video.duration}</p>
    </Link>))}
    </div>
  );
}