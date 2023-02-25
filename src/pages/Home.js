import { Link, useNavigate } from 'react-router-dom'
import Slideshow from '../components/SlideShow'
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
            <div>
                <Slideshow />

            </div>

        </>

    )
}

export default HomePage;