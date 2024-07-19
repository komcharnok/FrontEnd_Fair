/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useProduct } from '../../store/productStore';

function EditProductForm({ closeModal, product, updateProduct }) {
  const { setProductTitle, setDescription, setPrice, setRealPrice, product_title, description, price, real_price, category, product_type } = useProduct();

  useEffect(() => {
    if (product) {
      setProductTitle(product.product_title || '');
      setDescription(product.description || '');
      setPrice(product.price || 0);
      setRealPrice(product.real_price || 0);
    }
  }, [product, setProductTitle, setDescription, setPrice, setRealPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const productData = {
      product_title,
      description,
      price: parseFloat(price),
      real_price: parseFloat(real_price),
      category,
      product_type,
    };

    try {
      await updateProduct(product.product_id, productData);
      console.log('Product updated successfully');
      closeModal();
    } catch (error) {
      console.error('Error updating product', error);
    }
  };

  return (
    <div className="border flex flex-col mx-auto p-2 overflow-auto">
      <form className="flex flex-col" onSubmit={handleSubmit}>
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
        <button className="btn btn-outline btn-sm bg-red-600 text-white mt-2" type="submit">
          Save Product
        </button>
      </form>
      <button className="btn btn-outline btn-sm bg-red-600 text-white mt-1" onClick={closeModal}>
        Close
      </button>
    </div>
  );
}

export default EditProductForm;