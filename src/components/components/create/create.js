import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"

const Create = () => {
    let navigate = useNavigate();
    const [newId, setNewId] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCatrgory] = useState('');
    const [image, setImage] = useState('');

    const sendDataToAPI = () => {
        axios.post('https://63f8a6e26978b1f9105e1064.mockapi.io/api/products', {
            newId,
            title,
            price,
            category,
            image
        }).then(() => {
            navigate.push('/read')
        })
        alert("added successfully")(

        )
    }
    console.log('this data id', newId);
    return (
        <div className='add-new-product'>
            <Form>
                <Form.Field>
                    <label><span> Id:</span></label>
                    <input
                        placeholder='id'
                        name="Id"
                        onChange={(e) => setNewId(e.target.value)}
                    />
                </Form.Field>

                <Form.Field>
                    <label><span> Title:</span></label>
                    <input
                        placeholder='Title'
                        name='Title'
                        onChange={(e) => setTitle(e.target.value)}

                    />
                </Form.Field>

                <Form.Field>
                    <label><span> price:</span></label>
                    <input
                        placeholder='Price'
                        name='price'
                        type='number'
                        onChange={(e) => setPrice(e.target.value)}

                    />
                </Form.Field>

                <Form.Field>
                    <label><span> Category:</span></label>
                    <input
                        placeholder='Category'
                        name='category'
                        onChange={(e) => setCatrgory(e.target.value)}

                    />
                </Form.Field>

                <Form.Field>
                    <label><span> Image:</span></label>
                    <input type="file" accept="image"
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Form.Field>
                <Link to='/products'>
                    <Button color='brown' type='submit' onClick={sendDataToAPI}>Submit</Button>
                </Link>
            </Form>
        </div>
    )
}

export default Create;


