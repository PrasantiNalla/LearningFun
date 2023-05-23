import { Link } from "react-router-dom";
import "./LandingPage.scss";

export const LandingPage: React.FunctionComponent = () => {
    return (
        <>
            <h1 className='rainbow-text'>
                Welcome Aboard To Fun Learning!
            </h1>
            <div className="container">
                <img className="logo" src="./icons/TimeToLearn.png" alt="Fun Learning Logo" />
                <div className="btn">
                    <Link className=' rainbow-colors' to="/home">
                        Let's Go!
                    </Link>
                </div>
            </div>

        </>
    );
};
