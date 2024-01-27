import {useContext, useState} from 'preact/hooks';
import { createContext } from 'preact'

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState('home');
    const navigate = (value) => {
        setLocation(value)
    }

    return (
        <LocationContext.Provider value={{ location, navigate }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => {
    const context = useContext(LocationContext);
    if (!context) {
        throw new Error('useLocation must be used within a LocationProvider');
    }
    return context;
};
