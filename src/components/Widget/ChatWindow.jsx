import {useEffect, useRef, useState} from 'preact/hooks';
import styles from './ChatWindow.module.css';
import {createMessage, createRun, createThread, retrieveRun, retrieveRunStatus} from "./ChatService.js";
import {AssistantMessage, ErrorMessage, PendingMessage, UserMessage} from "./Messages.jsx";
import SendIcon from "./SendIcon.jsx";

/**
 * The chat user interface
 * @param toggleChat - whether the UI is open
 * @returns {Element}
 * @constructor
 */
const ChatWindow = ({ toggleChat }) => {
    const [messages, setMessages] = useState(
        [{role: 'assistant', content: "Hi there! If you have any questions about me, my handy digital stand-in can probably help. Ask away :)" }]);
    const [currentText, setCurrentText] = useState('');
    const thread = sessionStorage.getItem("currentThread") ?? createThread();
    const messageContainerRef = useRef(null);
    const assistant = "auditLog";

    //allows submission on enter key press
    const handleKeyUp = async (e) => {
        if (e.key === 'Enter') await handleSubmit();
    }

    const handleSubmit = async () => {
        try {
            if (currentText === '') return;
            let isAwaiting = true;

            //capture textbox and reset
            const message = currentText;
            setCurrentText("");

            //push pending to the message array
            setMessages([...messages,
                {role: 'user', content: message},
                {role: 'pending', content: ""}
            ]);

            //handle GPT assistant logic
            await createMessage(message);
            await createRun();

            //check the run status, more difficult queries can take some time to run
            // so this ensures the message is returned
            do {
                await new Promise(resolve => setTimeout(resolve, 1000));
                const r = await retrieveRunStatus();
                if (r.status === 'failed') {
                    setMessages([...messages, {
                        role: 'error',
                        content: "Sorry, an error has occurred. Please refresh or try again later"
                    }])
                    isAwaiting = false;
                    return;
                }
                if (r.status === 'completed') isAwaiting = false;
            } while (isAwaiting);

            //gets the whole conversation
            const r = await retrieveRun()
            setMessages(orderMessageArray(r));
        } catch (e) {
            console.log(e)
            setMessages([...messages, {
                role: 'error',
                content: `Sorry, an error has occurred. Please refresh or try again later: ${e.message}`
            }])
        }
    };

    //helper to squash the objects into manageable messages and order them
    const orderMessageArray = originalArray => originalArray.map(item => ({
        role: item.role,
        content: item.content && item.content.length > 0 && item.content[0].text.value || ''
    })).reverse();

    //helper to keep messages scrolled
    const scrollToBottom = () => {
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTo({
                top: messageContainerRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messageContainerRef, messages]);

    return (
        <aside id="chat-container" className={`${styles.chatContainer} ${styles.slideInBtmR}`}>
            <header id="chat-header" className={styles.header} onClick={toggleChat} >
                'William 2.0'
            </header>

            {/* The message container */}
            <section id="message-container" className={styles.messagesContainer} ref={messageContainerRef}>
                {messages.map((msg, index) => {
                    switch (msg.role) {
                        case 'user':
                            return <UserMessage key={index} message={msg.content} />;
                        case 'assistant':
                            return <AssistantMessage key={index} message={msg.content} />;
                        case 'pending':
                            return <PendingMessage key={index} />;
                        case 'error':
                            return <ErrorMessage key={index} message={msg.content} />;
                        default:
                            return null;
                    }
                })}
            </section>

            {/* The user input container */}
            <section id="input-container" className={styles.messageInputContainer}>
                <input
                    type="text"
                    id="input"
                    className={styles.messageInput}
                    value={currentText}
                    onChange={(e) => setCurrentText(e.target.value)}
                    onKeyUp={e => handleKeyUp(e)}
                    placeholder="Ask a question..."
                />
                <button id="send-button" onClick={handleSubmit} className={styles.sendButton}>
                    <SendIcon colour={"#fff"} />
                </button>
            </section>
        </aside>
    );
};

export default ChatWindow;
