import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Spinner from './layout/Spinner'

const Get = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            try {
                setLoading(true)
                const response = await axios.get(
                    "https://63f8a6e26978b1f9105e1064.mockapi.io/api/products"
                );
                setData(response.data);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false);
            }
        };
        getProducts()
    }, []);

    return (
        <div className='products-container'>
            {data.map((post) => (
                <div className='product-div'>
                    <img className='product-img' src={post.image} alt="shoes" />
                    <h2 key={post.id}> <span> Title</span>  {post.title} </h2>
                    <p><span> price: </span> {post.price} $</p>
                    <p><span>Category: </span>  {post.category} </p>
                    <div className='edit-container'>
                    </div>
                    <Link to='/read'>
                        <Button> Edit </Button>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Get;