// vendorHome.jsx
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useStore } from '../../store/storeStore'
import CustomModal from '../../components/Modal/CustomModal'
import CreateStoreForm from '../../components/store/CreateStoreForm'

function VendorHome() {
  const { stores, fetchStores, user_id } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchStores(user_id); // เรียก fetchStores โดยใช้ user_id
}, [fetchStores, user_id]);


  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  
  return (
    <div className="container flex flex-col gap-2 items-center mx-auto">
      <div className="flex justify-between w-full pt-3">
        <h1 className="text-2xl font-bold">My Store</h1>
        <button className="btn btn-error btn-sm" onClick={handleOpenModal}>
          + Add Store
        </button>
      </div>
      <hr className="my-2 w-full" />
      <Link
        to='/store'
        className="bg-white shadow-md rounded-lg overflow-hidden relative"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {stores.map((store) => (
            <div key={store.store_id} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={store.store_profilepic || "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600"}
                  alt={store.store_name}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{store.store_name}</h2>
                <p>{store.store_description}</p>
                <div className="card-actions justify-end">
                  {/* <Link to={`/store/${store.store_id}`} className="btn btn-primary">Details</Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Link>

      {/* Modal */}
      <CustomModal isOpen={isModalOpen} closeModal={handleCloseModal} title="Create Store">
        <CreateStoreForm closeModal={handleCloseModal} />
      </CustomModal>
    </div>
  );
}

export default VendorHome;