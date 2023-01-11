import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product'


const CreateProduct = () => {

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [stock, setStock] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post( endpoint, { description: description, price: price, stock: stock })
        navigate('/')
    }

    return (
        <div>
            <h3>Create Product</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label for='form-label'>Description</label>
                    <input value={description} onChange={(e)=> setDescription(e.target.value)} type='text' className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label for='form-label'>Stock</label>
                    <input value={stock} onChange={(e)=> setStock(e.target.value)} type='text' className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label for='form-label'>Price</label>
                    <input value={price} onChange={(e)=> setPrice(e.target.value)} type='text' className='form-control'/>
                </div>
                <button type="submit" className='btn btn-primary'>Create</button>
            </form>
        </div>
    )
}

export default CreateProduct