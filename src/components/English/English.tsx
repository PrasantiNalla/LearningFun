import { Link } from "react-router-dom";
import "./English.scss";

export const English: React.FunctionComponent = () => {
    return (<>
        <h1 className="rainbow-text">English Games</h1>
        <Link className="back-btn rainbow-colors " to="/home">Back</Link>
    </>);
}