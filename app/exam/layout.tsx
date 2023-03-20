import Link from 'next/link';
import { notFound } from 'next/navigation';
import '../globals.css';
import styles from '../page.module.css';

export function ExamsAside() {

  return (
    <>
    
    </>
      );}
  
export default function ExamsLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  const data = ExamsAside();
  return (
    
  <div className={styles.sidebar}>
  <aside className={styles.sidebar__sidebar}>
    
  <h2>
      Choose your exam 👇
    </h2>
        <div className={styles.containerfull}>
    <Link href={`/exam`} className={styles.cardmodules}>
      <ul>
      </ul>
        <h3>ESRI certification exams</h3>
        <li>
          ArcGIS Pro Entry 2101
        </li>
        <li>
          ArcGIS Pro Associate 2102
        </li>
        <li>
          ArcGIS Pro Proffesional 2103
        </li>
        <h3>AlaskaX's GIS</h3>
        <li>
          AlaskaX's (GIS) Essentials Professional Certificate
        </li>
        <h3>GISCI</h3>
        <li>
          GISCI Geospatial Core Technical Knowledge Exam
        </li>
        <h3>ASPRS</h3>
        <li>
          ASPRS Certified Photogrammetrist
        </li>
        <li>
          ASPRS Certified Mapping Scientist, Remote Sensing
        </li>
        <li>
          ASPRS Certified Mapping Scientist, GIS/LIS
        </li>
        <li>
          ASPRS Certified Mapping Scientist, Lidar
        </li>
        <li>
          ASPRS Certified Mapping Scientist, UAS
        </li>
        <li>
          ASPRS Certified Photogrammetric Technologist
        </li>
        <li>
          ASPRS Certified Remote Sensing Technologist
        </li>
        <li>
          ASPRS Certified GIS/LIS Technologist
        </li>
        <li>
          ASPRS Certified Lidar Technologist
        </li>
        <li>
          ASPRS Certified UAS Technologist
        </li>
    </Link>
    </div>
    
  </aside>
  <main className={styles.sidebar__main}>{children}</main>
  </div>
  );
}