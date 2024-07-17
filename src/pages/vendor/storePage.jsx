/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CustomModal from '../../components/Modal/CustomModal';
import CreateProductForm from '../../components/Product/CreateProductForm';
import { useProduct } from '../../store/productStore';
import EditProductForm from '../../components/Product/EditProductForm';
import { Link } from 'react-router-dom';

function StorePage() {
    const { store_id } = useParams();
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { products, getProductsByStoreId, deleteProduct, updateProduct } = useProduct();
  
    useEffect(() => {
      getProductsByStoreId(store_id);
    }, [store_id, getProductsByStoreId]);
  
    const handleOpenCreateModal = () => {
      setIsCreateModalOpen(true);
    };
  
    const handleCloseCreateModal = () => {
      setIsCreateModalOpen(false);
    };
  
    const handleOpenEditModal = (product_id) => {
      const storeToEdit = products.find(product => product.product_id === product_id);
      setSelectedProduct(storeToEdit);
      setIsEditModalOpen(true);
    };
  
    const handleCloseEditModal = () => {
      setSelectedProduct(null);
      setIsEditModalOpen(false);
    };
  
    const handleDeleteProduct = async (product_id) => {
      await deleteProduct(product_id);
      getProductsByStoreId(store_id);
    };
  
    const handleUpdateProduct = async (product_id, productData) => {
      await updateProduct(product_id, productData);
      getProductsByStoreId(store_id);
    };
  
    return (
      <div className="container flex flex-col gap-2 items-center mx-auto">
        <div className="flex justify-between w-full pt-3">
          <h1 className="text-2xl font-bold">My Products</h1>
          <button className="btn btn-error btn-sm pt-2" onClick={handleOpenCreateModal}>
            + Add Product
          </button>
        </div>
        <hr className="my-2 w-full" />
        <div className="flex flex-wrap gap-2 justify-center">
          {products.map((product) => (
            <div key={product.product_id} className="card card-compact bg-base-100 w-96 shadow-xl">
              <figure className="max-h-80">
                <img
                  src={product.product_pic || 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'}
                  alt={product.product_title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.product_title}</h2>
                <h2 className="card-title">{product.price}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-between">
                  <div>
                    <button
                      className="btn bg-green-800 text-white"
                      title="Edit Product"
                      onClick={() => handleOpenEditModal(product.product_id)}
                    >
                      Edit
                    </button>
                    <button className="btn bg-red-600 text-white" onClick={() => handleDeleteProduct(product.product_id)}>
                      Delete
                    </button>
                  </div>
                  <Link to={`/product/productdetail/${product.product_id}`} className="btn btn-primary">
                    Visit
                  </Link>
                </div>
              </div>
            </div>
          ))}
  
          {/* Modal for Create Product */}
          <CustomModal isOpen={isCreateModalOpen} closeModal={handleCloseCreateModal} title="Create Product">
            <CreateProductForm closeModal={handleCloseCreateModal} store_id={store_id} />
          </CustomModal>
  
          {/* Modal for Edit Product */}
          {selectedProduct && (
            <CustomModal isOpen={isEditModalOpen} closeModal={handleCloseEditModal} title="Edit Product">
              <EditProductForm closeModal={handleCloseEditModal} product={selectedProduct} updateProduct={handleUpdateProduct} />
            </CustomModal>
          )}
        </div>
      </div>
    );
  }
  
  export default StorePage;