import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getItem, setItem } from '../styles/services/localStorageService';
const Get = () => {

    const handleDelete = (id) => {
        setData((data) => data.filter((e) => e.id !== id));
    };
    //  THE EDIT:

    const handleEdit = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, serError] = useState({
        isError: false,
        message: '',
    });

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
                    <button onClick={() => handleEdit(post.id)}>Edit</button>
                    <button onClick={() => handleDelete(post.id)}>Delete</button>

                    {/* <p ><span>Description: </span>  {post.description}</p> */}
                </div>
            ))}
        </div>
    )
}

export default Get;