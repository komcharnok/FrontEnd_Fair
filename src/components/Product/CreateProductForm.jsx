
/* eslint-disable no-unused-vars */
import axios from "axios"
import { useProduct } from "../../store/productStore"
import React from 'react'

function CreateProductForm() {
    const {
        product_title,
        description,
        price,
        real_price,
        category,
        product_type,
        store_id,
        setProductTitle,
        setDescription,
        setPrice,
        setRealPrice,
        resetForm
    } = useProduct()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const productData = {
            product_title,
            description,
            price: parseFloat(price),
            real_price: parseFloat(real_price),
            category,
            product_type,
            store_id
        }

        try {
            const response = await axios.post('http://localhost:8000/product', productData)
            console.log('Product added successfully', response.data)
            resetForm()
        } catch (error) {
            console.error('Error adding product', error)
        }
    }

    return (
        <div className="border w-4/6 min-w-[600px] flex flex-col gap-3 mx-auto p-3">
            <h1 className="text-2xl">ADD Product</h1>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>

                {/* product name */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Product Name</span>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        value={product_title}
                        onChange={(e) => setProductTitle(e.target.value)}
                    />
                </label>

                {/* product description */}
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Product Description</span>
                    </div>
                    <textarea 
                        className="textarea textarea-bordered h-24" 
                        placeholder="Bio"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </label>

                {/* product picture */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Product Picture</span>
                    </div>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </label>

                {/* price */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Price</span>
                    </div>
                    <input 
                        type="number" 
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </label>

                {/* real price */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Real Price</span>
                    </div>
                    <input 
                        type="number" 
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs"
                        value={real_price}
                        onChange={(e) => setRealPrice(e.target.value)}
                    />
                </label>

                <button className="btn btn-outline btn-secondary mt-40" type="submit">Add Product</button>
            </form>
        </div>
    )
}

export default CreateProductForm
