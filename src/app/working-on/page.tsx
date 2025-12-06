import styles from './page.module.css';

const projects = [
    {
        id: 1,
        title: 'Personal Website Rebuild',
        description: 'Rebuilding my personal site with Next.js and a premium design.',
        status: 'In Progress',
    },
    {
        id: 2,
        title: 'Project Alpha',
        description: 'A secret project exploring AI agents.',
        status: 'Planning',
    },
];

export default function WorkingOn() {
    return (
        <div className="container">
            <div className={styles.header}>
                <h1>What I'm Working On</h1>
                <p>A collection of my current projects and experiments.</p>
            </div>
            <div className={styles.list}>
                {projects.map((project) => (
                    <div key={project.id} className={styles.item}>
                        <div className={styles.itemHeader}>
                            <h2>{project.title}</h2>
                            <span className={`${styles.status} ${styles[project.status.toLowerCase().replace(' ', '-')]}`}>
                                {project.status}
                            </span>
                        </div>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
