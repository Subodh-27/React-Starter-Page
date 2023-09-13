import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='--center-all' style={{ minHeight: "80vh" }}>
            <h2>Not Found</h2>

            <p>Looks like you are at Wrong Place</p>
            <br />
            <Link to="/">
                <button className='--btn --btn-primary'>
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;