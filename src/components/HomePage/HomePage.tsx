import { Link } from "react-router-dom";
import "./HomePage.scss";

export const HomePage: React.FunctionComponent = () => {
    return (<>
        {/* <img className='learning-icon' src="./icons/KeepLearning.jpg" /> */}
        <h1 className='rainbow-text'>
            Explore different subjects and have fun learning!
        </h1>
        <div className='home-container'>
            <Link className='btn-p purple' to="/home">
                <img className="subject-icon" src="./icons/abc.png" />
                <span className="subject-text">English</span>
            </Link>
            <Link className='btn-r red' to="/home">
                <img className="subject-icon" src="./icons/maths.png" />
                <span className="subject-text">Maths</span>
            </Link>
            <Link className='btn-g green' to="/home">
                <img className="subject-icon" src="./icons/flask.png" />
                <span className="subject-text">Science</span>
            </Link>
            <Link className='btn-o orange' to="/home">
                <img className="subject-icon" src="./icons/art1.png" />
                <span className="subject-text">Arts</span>
            </Link>
        </div>

    </>);
}