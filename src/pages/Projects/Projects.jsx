import { NavMenu } from '../../components/NavMenu/index.js';
import { SocialLogos } from '../../components/SocialLogos/index.js';
import { Card } from '../../components/Card';
import { projects } from './projects.js';
import styles from './Projects.module.css';

export const Projects = () => {
    return (
        <div className="focus-in">
            <SocialLogos size={50} />
            <h2 className={styles['projects-heading']}>Projects</h2>
            <div className={styles['projects-container']}>
                {projects.map((project, index) => (
                    <Card key={index} content={project} />
                ))}
            </div>
            <NavMenu />
        </div>
    );
};
