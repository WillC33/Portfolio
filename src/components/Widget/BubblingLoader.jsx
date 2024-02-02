import styles from './BubblingLoader.module.css';

/**
 * The in-message loader
 * @returns {Element}
 * @constructor
 */
const BubblingLoader = () => {
    return (
        <div id="loader" className={styles.bubblingLoader}>
            <div id="loader-dot1" className={styles.dot1}></div>
            <div id="loader-dot2" className={styles.dot2}></div>
            <div id="loader-dot3" className={styles.dot3}></div>
        </div>
    );
};

export default BubblingLoader;
