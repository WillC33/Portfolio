import {MailLogo} from "./MailLogo.jsx";
import {LinkedinLogo} from "./LinkedinLogo.jsx";
import {GitHubLogo} from "./GitHubLogo.jsx";
import {useColour} from "../../context/ColourContext.jsx";


export const SocialLogos = ({size = 80}) => {
    const { colour } = useColour()
    return (
        <menu>
            <MailLogo colour={colour} size={size} />
            <LinkedinLogo colour={colour} size={size} />
            <GitHubLogo colour={colour} size={size} />
        </menu>
    )
}
