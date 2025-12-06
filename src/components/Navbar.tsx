import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Will Fincher
        </Link>
        <div className={styles.links}>
          <Link href="/blog" className={styles.link}>
            Blog
          </Link>
          <Link href="/working-on" className={styles.link}>
            Working On
          </Link>
          <Link href="/about" className={styles.link}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
