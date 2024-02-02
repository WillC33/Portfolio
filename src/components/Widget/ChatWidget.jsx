import { useState } from 'preact/hooks';
import styles from './ChatWidget.module.css';
import ChatWindow from "./ChatWindow.jsx";

/**
 * Renders the chat widget button
 * @returns {Element}
 * @constructor
 */
const ChatWidget = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(prev => !prev);
    };

    return (
        <>
            {!isChatOpen && (
                <div id="chat-widget" className={styles.widget} onClick={toggleChat}>
                    <span id="chat-widget-icon" className={styles.chatIcon}>💬</span>
                </div>
            )}
            {isChatOpen && <ChatWindow toggleChat={toggleChat} />}
        </>
    );
};

export default ChatWidget;
