import { Pill } from '../Pill';
import styles from './Card.module.css';

export const Card = ({ content }) => {
    return (
        <article className={styles.card}>
            <header>
                <h3>{content.title}</h3>
            </header>
            <section className={styles.content}>
                <div className={styles.stack}>
                    {content.tech.map((tech, index) => (
                        <Pill key={index}>
                            {tech}
                        </Pill>
                    ))}
                </div>
                <p className={styles.text}>{content.description}</p>
                <div className={styles.buttons}>
                    {content.url && (
                        <a href={content.url} className={styles.button} target="_blank" rel="noopener noreferrer">
                            () => seeIt
                        </a>
                    )}
                    {content.post && (
                        <a href={content.post} className={styles.button}>
                            () => aboutIt
                        </a>
                    )}
                </div>
            </section>
        </article>
    );
};
