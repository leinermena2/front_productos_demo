import React, { useEffect, useState } from 'react'
import axios from 'axios'


import { Link } from 'react-router-dom'


const endpoint = 'http://localhost:8000/api'
const ShowProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts()
    }, [])
    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`);
        setProducts(response.data);
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/product/${id}`);
        getAllProducts();
    }
    return (
        <div>
            <div className='d-grid gap-2'>
                <Link to="/create" className='btn btn-primary btn-lg mt-2 mb-2 text-white'>Create Product</Link>
            </div>
            <table className='table table-bordered'>
                <thead>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className='btn btn-warning'>Edit</Link>
                                <button onClick={() => deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShowProducts