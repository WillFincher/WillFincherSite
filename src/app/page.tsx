import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>
            Building digital experiences that matter.
          </h1>
          <p>
            I'm Will Fincher, a developer focused on creating premium web applications with modern technologies.
          </p>
        </div>

        <div className={styles.ctas}>
          <Link href="/working-on" className={styles.primary}>
            View my work
          </Link>
          <Link href="/about" className={styles.secondary}>
            More about me
          </Link>
        </div>
      </main>
    </div>
  );
}
