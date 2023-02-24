import { Link, useNavigate } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation';

const HomePage = () => {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/products')
    }
    return (
        <>
            <h1>MY HOME PAGE</h1>

            <p>
                GO TO
                <Link to="/products">THE LIST OF PRODUCTS</Link>
            </p>

            <p onClick={navigateHandler}>
                Navigate button
            </p>

        </>

    )
}

export default HomePage;