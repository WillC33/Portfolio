import {useContext, useEffect, useState} from 'preact/hooks';
import { createContext } from 'preact'

const ColourContext = createContext();

export const ColourProvider = ({ children }) => {
    const [colour, setColour] = useState('');
    const colourOptions = [
        "#e69809",
        "#a66efa"
    ];

    useEffect(() => {
        const c = Math.floor(Math.random() * colourOptions.length);
        setColour(colourOptions[c]);
    }, []);

    return (
        <ColourContext.Provider value={{ colour }}>
            {children}
        </ColourContext.Provider>
    );
};

export const useColour = () => {
    const context = useContext(ColourContext);
    if (!context) {
        throw new Error('useColour must be used within a ColourProvider');
    }
    return context;
};
