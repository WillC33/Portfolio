import axios from "axios";

const CONTROLLER_BASE_URL = "https://portfoliochatassistantapi.azurewebsites.net/Conversation"
const headers = {
    'Content-Type': "application/json"
};

/**
 * Creates a new chat thread with OpenAI
 * @returns {Promise<object>}
 */
export const createThread = async () => {
    try {
        const response = await axios.post(`${CONTROLLER_BASE_URL}/thread`, null, {
            headers: headers,
        });
        sessionStorage.setItem('currentThread', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.error('Error creating thread:', error.message);
    }
};

/**
 * Creates a message within a thread
 * @param message - the text of the message to send
 * @returns {Promise<object>}
 */
export const createMessage = async (message) => {
    try {
        const thread = JSON.parse(sessionStorage.getItem("currentThread"));
        const response = await axios.post(`${CONTROLLER_BASE_URL}/message/${thread.id}`, message, {
            headers: headers,
        });
        return response.data;
    } catch (error) {
        console.error('Error creating thread:', error.message);
    }
};

/**
 * Runs the specified assistant on the thread
 * @returns {Promise<object>}
 */
export const createRun = async () => {
    try {
        const thread = JSON.parse(sessionStorage.getItem("currentThread"));
        const response = await axios.post(`${CONTROLLER_BASE_URL}/run/${thread.id}`, {
            headers: headers,
        });
        sessionStorage.setItem('currentRun', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.error('Error creating thread:', error.message);
    }
};

/**
 * Queries the list of generated messages
 * @returns {Promise<array>}
 */
export const retrieveRun = async () => {
    try {
        const thread = JSON.parse(sessionStorage.getItem("currentThread"));
        const response = await axios.get(`${CONTROLLER_BASE_URL}/messages/${thread.id}`, {
            headers: headers,
        });
        return response.data;
    } catch (error) {
        console.error('Error creating thread:', error.message);
    }
};

/**
 * Checks whether a particular message run is completed
 * @returns {Promise<object>}
 */
export const retrieveRunStatus = async () => {
    try {
        const thread = JSON.parse(sessionStorage.getItem("currentThread"));
        const run = JSON.parse(sessionStorage.getItem("currentRun"));
        const response = await axios.get(`${CONTROLLER_BASE_URL}/status/${thread.id}/${run.id}`, {
            headers: headers,
        });
        sessionStorage.setItem('messageList', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        console.error('Error retrieving run status:', error.message);
    }
};
