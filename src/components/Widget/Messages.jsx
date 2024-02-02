import styles from './Messages.module.css';
import BubblingLoader from "./BubblingLoader.jsx";

/**
 * Displays a user's message
 * @param message - the text to display
 * @returns {Element}
 * @constructor
 */
export const UserMessage = ({ message }) => {
    return (
        <article className={styles.userMessage}>
            <p className={`${styles.messageContent} ${styles.userContent}`}>
                {message}
            </p>
        </article>
    );
};

/**
 * Displays a response from the assistant
 * @param message - the response text
 * @returns {Element}
 * @constructor
 */
export const AssistantMessage = ({ message }) => {
    return (
        <article className={styles.assistantMessage}>
            <p className={`${styles.messageContent} ${styles.assistantContent}`}>
                {message}
            </p>
        </article>
    );
};

/**
 * Displays a placeholder to show a response is awaited
 * @returns {Element}
 * @constructor
 */
export const PendingMessage = () => {
    return (
        <article className={styles.assistantMessage}>
            <div className={`${styles.messageContent} ${styles.assistantContent}`}>
                <BubblingLoader />
            </div>
        </article>
    );
};

/**
 * Displays an error message
 * @param message - the text of the error
 * @returns {Element}
 * @constructor
 */
export const ErrorMessage = ({message}) => {
    return (
        <article className={styles.messageContainer}>
            <p className={`${styles.errorMessage} ${styles.messageContent} ${styles.assistantContent}`}>
                {message}
            </p>
        </article>
    );
}
