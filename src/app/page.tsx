import styles from "./page.module.css";
import CarCard from "@/components/carCard";
import { getFeaturedCars, getLatestCars } from "@/lib/dbQueries";
import Link from "next/link";

export const metadata = {
  title: "الرئيسية | منصة مصدوم",
};

export default async function Home() {
  const featuredCars = await getFeaturedCars();

  const latestCars = await getLatestCars();

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h1>
          الحراج الأول <br></br> للسيارات المصدومة
        </h1>
        <div className={styles.links}>
          <button>أبرز الإعلانات</button>
          <a href="#">جميع الإعلانات</a>
        </div>
      </div>
      <div className={styles.topOffersSection}>
        <div className={styles.top}>
          <h1>
            إعلانات <span>مختارة</span>
          </h1>
          <h6>تصفح أبرز العروض</h6>
        </div>
        <div className={styles.content}>
          {featuredCars.map((item, index) => (
            <div key={index}>
              <CarCard carData={item} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.latestOffersSection}>
        <div className={styles.top}>
          <h1>
            آخر <span>الإعلانات</span>
          </h1>
          <h6>تصفح آخر العروض</h6>
        </div>
        <div className={styles.content}>
          {latestCars.map((item, index) => (
            <div key={index}>
              <CarCard carData={item} />
            </div>
          ))}
        </div>
        <div className={styles.btn}>
          <button>
            <Link href={"./cars"}>
              عرض جميع التفاصيل
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
