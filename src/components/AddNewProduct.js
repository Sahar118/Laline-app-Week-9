import React, { useState } from 'react';
import axios from 'axios';

const AddNewProduct = () => {
    const [data, setData] = useState({ id: "", title: "", price: "", image: "", Category: "" })
    const [result, setResult] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "https://63f8a6e26978b1f9105e1064.mockapi.io/api/products",
                data
            )
            setResult(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p><span> Id:</span></p>
                <input
                    type="text"
                    name="id"
                    value={data.id}

                    onChange={handleChange} />
                <p><span> Title:</span></p>
                <input
                    type="text"
                    name="title"
                    value={data.title}
                    onChange={handleChange} />

                <p><span> price:</span></p>
                <input
                    type="text"
                    name="price"
                    value={data.price}
                    onChange={handleChange} />

                <p><span> Category:</span></p>

                <input
                    type="text"
                    name="Category"
                    value={data.Category}
                    onChange={handleChange} />


                <input type="file" accept="image/*" value={data.image} onChange={handleChange} />

                <button type="submit">Submit</button>


            </form>
            {result && (
                <div>
                    <h2> New product </h2>
                    <p key={result.id}>Name: {result.title}</p>
                    <p> Price: {result.price} $ </p>
                    <p> Category: {result.Category}</p>
                    <img src={result.image} alt="shoes"></img>
                </div>
            )}
        </div>
    )
}
export default AddNewProduct;