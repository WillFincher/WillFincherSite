import styles from './page.module.css';

export default function About() {
    return (
        <div className="container">
            <div className={styles.content}>
                <h1>About Will</h1>
                <p>
                    Hello! I'm Will Fincher. I'm a developer passionate about building
                    beautiful and functional web applications.
                </p>
                <p>
                    I specialize in React, Next.js, and modern web technologies. I love
                    solving complex problems and creating intuitive user experiences.
                </p>
                <p>
                    When I'm not coding, you can find me exploring new technologies,
                    reading, or enjoying the outdoors.
                </p>
            </div>
        </div>
    );
}
