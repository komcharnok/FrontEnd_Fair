/* eslint-disable no-unused-vars */
// vendorHome.jsx
// vendorHome.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/storeStore';
import CustomModal from '../../components/Modal/CustomModal';
import CreateStoreForm from '../../components/store/CreateStoreForm';
import { useUser } from '../../store/store';
import EditStoreForm from './../../components/store/EditStoreForm';

function VendorHome() {
  const { user } = useUser();
  const { stores, fetchStores, deleteStore } = useStore();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  useEffect(() => {
    fetchStores(user.user_id);
  }, [fetchStores, user.user_id]);

  const handleOpenCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleOpenEditModal = (store_id) => {
    const storeToEdit = stores.find(store => store.store_id === store_id);
    setSelectedStore(storeToEdit);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedStore(null);
    setIsEditModalOpen(false);
  };

  const handleDeleteStore = async (store_id) => {
    await deleteStore(store_id);
    await fetchStores(user.user_id); // รีเฟรชรายการร้านค้า
  };
  console.log(user);

  return (
    <div className="container flex flex-col gap-2 items-center mx-auto">
      <div className="flex justify-between w-full pt-3">
        <h1 className="text-2xl font-bold">My Store</h1>
        <button className="btn  bg-red-600 text-white btn-sm" title="Create Store" onClick={handleOpenCreateModal}>
          + Add Store       
           </button>
      </div>
      <hr className="my-2 w-full" />
      <div className="bg-white shadow-md rounded-lg overflow-hidden relative">
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
                <div className="card-actions justify-between">
                  <div>
                    <button
                      className="btn bg-green-800 text-white"
                      title="Edit Store"
                      onClick={() => handleOpenEditModal(store.store_id)}
                    >
                      Edit
                    </button> 
                    <button
                      className="btn bg-red-600 text-white "
                      onClick={() => handleDeleteStore(store.store_id)}
                    >
                      Delete
                    </button>
                  </div>
                  <Link to={`/product/store/${store.store_id}`} className="btn btn-primary">Visit store</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Create Store */}
      <CustomModal isOpen={isCreateModalOpen} closeModal={handleCloseCreateModal} title="Create Store">
        <CreateStoreForm closeModal={handleCloseCreateModal} user_id={user.user_id} />

      </CustomModal>

      {/* Modal for Edit Store */}
      {selectedStore && (
        <CustomModal isOpen={isEditModalOpen} closeModal={handleCloseEditModal} title="Edit Store">
          <EditStoreForm closeModal={handleCloseEditModal} store={selectedStore} />
        </CustomModal>
      )}
    </div>
  );
}

export default VendorHome;
