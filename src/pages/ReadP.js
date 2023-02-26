import React, { useEffect, useState } from 'react'
import { Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Read = () => {


    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`https://63f8a6e26978b1f9105e1064.mockapi.io/api/products`)
            .then((getData) => {
                setApiData(getData.data)
            })

    }, [])

    const setData = (id, title, price, Category, image) => {
        localStorage.setItem('id', id)
        localStorage.setItem('title', title);
        localStorage.setItem('price', price);
        localStorage.setItem('Category', Category);
        localStorage.setItem('image', image);

    }

    const getData = () => {
        axios.get(`https://63f8a6e26978b1f9105e1064.mockapi.io/api/products`)
            .then((getData) => {
                setApiData(getData.data)
            })
        console.log('clicked');
    }

    const onDelete = (id) => {
        axios.delete(`https://63f8a6e26978b1f9105e1064.mockapi.io/api/products/${id}`)
            .then(() => {
                getData()
            })

    }
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                        <Table.HeaderCell>Image</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.title}</Table.Cell>
                                <Table.Cell>{data.price}</Table.Cell>
                                <Table.Cell>{data.Category}</Table.Cell>
                                <Table.Cell>{data.image}</Table.Cell>

                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button color="green"
                                            onClick={() => setData(data.id, data.title, data.price, data.Category, data.image)}> Update</Button>
                                    </Link>
                                </Table.Cell>

                                <Table.Cell>

                                    <Button color="red" onClick={() => onDelete(data.id)}> Delete</Button>

                                </Table.Cell>


                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>

        </div>
    )
}
export default Read;
