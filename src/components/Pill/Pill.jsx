import {useColour} from "../../context/ColourContext.jsx";
import styles from './Pill.module.css';

export const Pill = ({ children }) => {
    const {colour} = useColour();

    const pillStyle = {
        backgroundColor: colour,
        borderColor: colour,
    };

    return (
        <div className={styles.pill} style={{ ...pillStyle }}>
            {children}
        </div>
    );
};

