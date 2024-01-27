import {NavMenu} from "../../components/NavMenu/index.js";
import {SocialLogos} from "../../components/SocialLogos/index.js";
import styles from "./Profile.module.css";


export const Profile = () => {
    return (
        <div className="focus-in">
            <SocialLogos size={50}/>
            <h2 className={styles.heading}>Profile</h2>
            <section className="columns">
                <article className="column">
                    <p className={styles.bioText}>
                        I am a data-driven full-stack developer, with a fascination for Agile processes. In my current role, I work on maintaining and developing projects in ASP.NET web API, React, and even legacy code in WinForms, giving me knowledge of a wide range of software paradigms and approaches.
                        Before I began developing, I ran my own communication coaching practice for several years and though the work was satisfying, it was always the technical aspects of the operation that kept me feeling challenged and engaged.<br/>
                        Working with communication gave me an interest in the presentation and movement of information and data within software and a particular passion for the development and consumption of APIs.
                        My various projects in work have allowed me knowledge of managing modern enterprise software through VCS, CI/CD, and refactoring to account for modern best practices. My projects range from WordPress websites to browser extensions and the large enterprise SaaS products of my work.
                    </p>
                </article>
                <img className={`column ${styles.image}`} src="/assets/small-profile.jpeg" width={408} height={416} alt="Portrait photo of William Cooke"/>
            </section>
            <NavMenu />
        </div>
    )
}
