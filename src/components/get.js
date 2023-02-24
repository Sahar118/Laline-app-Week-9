import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Get = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://63f8a6e26978b1f9105e1064.mockapi.io/api/products"
                );
                setData(response.data);
            } catch (error) {
                console.log(error)
            }
        };
        fetchData()
    }, []);

    return (
        <div className='products-container'>
            {data.map((post) => (
                <div className='product-div'>
                    <img className='product-img' src={post.image} alt="shoes" />
                    <h2 key={post.id}> <span> Title</span>  {post.title} </h2>
                    <p><span> price: </span> {post.price} $</p>
                    <p><span>Category: </span>  {post.category} </p>
                    {/* <p ><span>Description: </span>  {post.description}</p> */}
                </div>
            ))}
        </div>
    )
}

export default Get;