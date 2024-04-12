import styles from "./NavMenu.module.css";
import {useLocation} from "../../context/LocationContext.jsx";


export const NavMenu = () => {
    const {location, navigate} = useLocation()

    const handleClick = (e) => {
        const page = e.target.getAttribute('name')
        if (page === 'blog') window.location.href = "https://garden.williamcooke.net";
        navigate(page);
    }

    return (
        <menu>
            <ul className={styles.menu}>
                {location !== 'home' && <li className={styles.listItem}>
                    <p name="home" onClick={(e) => handleClick(e)} className='with-highlight'>() => goHome</p>
                </li>}
                {location !== 'profile' && <li className={styles.listItem}>
                    <p name="profile" onClick={(e) => handleClick(e)} className="with-highlight">() => profile</p>
                </li>}
                {location !== 'projects' && <li className={styles.listItem}>
                    <p name="projects" onClick={(e) => handleClick(e)} className="with-highlight">() => projects</p>
                </li>}
                {location !== 'blog' && <li className={styles.listItem}>
                    <p name="blog" onClick={(e) => handleClick(e)} className="with-highlight">() => blog</p>
                </li>}
            </ul>
        </menu>
    )
}
