import Link from 'next/link';
import styles from './page.module.css';

const posts = [
    {
        id: 1,
        title: 'Building My Personal Website',
        date: '2025-12-06',
        excerpt: 'How I rebuilt my site using Next.js and modern design principles.',
        slug: 'building-my-personal-website',
    },
    {
        id: 2,
        title: 'The Future of Web Development',
        date: '2025-11-20',
        excerpt: 'Thoughts on where the web is heading in the next decade.',
        slug: 'future-of-web-development',
    },
];

export default function Blog() {
    return (
        <div className="container">
            <div className={styles.header}>
                <h1>Blog</h1>
                <p>Thoughts, ideas, and tutorials.</p>
            </div>
            <div className={styles.grid}>
                {posts.map((post) => (
                    <article key={post.id} className={styles.card}>
                        <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                            <span className={styles.date}>{post.date}</span>
                            <h2>{post.title}</h2>
                            <p>{post.excerpt}</p>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
