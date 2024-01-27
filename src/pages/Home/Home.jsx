import styles from './Home.module.css'
import {SocialLogos} from "../../components/SocialLogos/index.js";
import {NavMenu} from "../../components/NavMenu/index.js";
export const Home = () => {
    return (
        <div className="focus-in">
            <SocialLogos size={50}/>
            <section className="columns">
                <article className="column">
                    <h1>William Cooke</h1>
                    <p className={styles.bioText}>
                        // full stack .net + (p)react developer<br/>
                        // passionate about api development, agile, and all things machine learning<br/>
                    </p>
                </article>
            </section>
            <NavMenu />
        </div>
    )
}
