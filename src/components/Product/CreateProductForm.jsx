/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import axios from "axios"
import { useProduct } from "../../store/productStore"
import React from 'react'

function CreateProductForm({ closeModal }) {
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
      resetForm,
      createProduct
    } = useProduct();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const productData = {
        product_title,
        description,
        price: parseFloat(price),
        real_price: parseFloat(real_price),
        category,
        product_type,
        store_id
      };
  
      try {
        await createProduct(productData);
        console.log('Product added successfully');
        resetForm();
        closeModal(); // Close modal after successful submission
      } catch (error) {
        console.error('Error adding product', error);
      }
    };
  
    return (
      <div className="border flex flex-col  mx-auto p-2  overflow-auto">
      {/* <h1 className="text-2xl">ADD Product</h1> */}
      <form className="flex flex-col " onSubmit={handleSubmit}>
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
        <label className="form-control">
          <div className="label">
            <span className="label-text">Product Description</span>
          </div>
          <textarea 
            className="textarea textarea-bordered h-18" 
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Product Picture</span>
          </div>
          <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
        </label>
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
        <button className="btn btn-outline btn-sm  bg-red-600 text-white mt-2" type="submit">Add Product</button>
      </form>
      <button className="btn btn-outline btn-sm bg-red-600 text-white mt-1" onClick={closeModal}>
        Close
      </button>
    </div>
    );
  }
  
  export default CreateProductForm;