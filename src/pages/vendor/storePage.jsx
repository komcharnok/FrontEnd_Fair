/* eslint-disable no-unused-vars */
import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../store/productStore'; 
import CustomModal from '../../components/Modal/CustomModal'
import CreateProductForm from '../../components/Product/CreateProductForm';

function StorePage() {
  const { store_id } = useParams();
  const [store, setStore] = useState({});
  const [products, setProducts] = useState([]);
  const { setProductTitle, setDescription, setPrice, setRealPrice, createProduct } = useProduct();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchStore = async () => {
      try {
          const response = await axios.get(`http://localhost:8080/store/${user_id}`);
          setStore(response.data);
      } catch (error) {
          console.error('Error fetching store', error);
      }
  };

  const fetchProducts = async () => {
      try {
          const response = await axios.get(`http://localhost:8080/product?store_id=${store_id}`);
          setProducts(response.data);
      } catch (error) {
          console.error('Error fetching products', error);
      }
  };

  useEffect(() => {
      fetchStore();
      fetchProducts();
  }, [store_id]);

  const handleOpenModal = () => {
      setIsModalOpen(true);
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);
  };

  return (
      <div className="container flex flex-col gap-2 items-center mx-auto">
          <div className="flex justify-between w-full pt-3">
              <h1 className=" text-2xl font-bold ">{store.store_name}</h1>
              {/* <h1 className="text-2xl font-bold">store_name</h1> */}
              <button className="btn btn-error btn-sm pt-2 " onClick={handleOpenModal}>
                  + Add Product
              </button>
          </div>
          <hr className="my-2 w-full" />
          <div className='flex flex-wrap gap-2 justify-center'>
          {products.map((product) => (
              <div key={product.id} className="card card-compact bg-base-100 w-96 shadow-xl">
                  <figure className='max-h-80'>
                      <img src={product.product_pic || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} 
                          alt={product.product_title} />
                  </figure>
                  <div className="card-body">
                      <h2 className="card-title">{product.product_title}</h2>
                      <h2 className="card-title">{product.price}</h2>
                      <p>{product.description}</p>
                      <div className="card-actions justify-end">
                          <button className="btn btn-primary">More details</button>
                      </div>
                  </div>
              </div>
          ))}

          <CustomModal isOpen={isModalOpen} closeModal={handleCloseModal} title="Add Product">
              <CreateProductForm closeModal={handleCloseModal} />
          </CustomModal>
      </div>
      </div>
  );
}

export default StorePage;