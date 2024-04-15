import {useEffect} from 'preact/hooks'
import './app.css'
import {Home} from "./pages/Home";
import {LocationProvider, useLocation} from "./context/LocationContext.jsx";
import {Profile} from "./pages/Profile";
import {Projects} from "./pages/Projects";
import {ColourProvider} from "./context/ColourContext.jsx";
import ChatWidget from "./components/Widget/ChatWidget.jsx";

export const App = () => (
    <ColourProvider>
        <LocationProvider>
            <Main />
        </LocationProvider>
    </ColourProvider>
)

const Main = () => {
    const {location} = useLocation()
    useEffect(() => {
    }, [location]);

    const modules = (() => {
        switch (location) {
            case 'profile' : return <Profile/>
            case 'projects' : return <Projects/>
            case 'home':
            default : return <Home/>
        }
    })()

    return (
        <>
            {modules}
        </>
    )
}
