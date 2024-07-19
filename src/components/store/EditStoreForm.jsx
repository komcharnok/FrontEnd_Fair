/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// EditStoreForm.jsx
// EditStoreForm.jsx
import React, { useEffect } from 'react';
import { useStore } from '../../store/storeStore';

function EditStoreForm({ closeModal, store }) {
  const {
    store_name,
    store_description,
    setStoreName,
    setStoreDescription,
    updateStore,
    fetchStores, // เพิ่ม fetchStores จาก useStore
    resetForm
  } = useStore();

  useEffect(() => {
    if (store) {
      setStoreName(store.store_name || '');
      setStoreDescription(store.store_description || '');
    }
  }, [store, setStoreName, setStoreDescription]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const storeData = {
      store_name,
      store_description
    };

    await updateStore(store.store_id, storeData);
    await fetchStores(); // เรียก fetchStores เพื่ออัพเดตข้อมูลหน้า VendorHome
    resetForm();
    closeModal();
  };

  return (
    <div className="border flex flex-col  mx-auto p-3">
      <h1 className="text-2xl">Edit Your Store</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        {/* Form fields */}
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Store Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={store_name}
            onChange={(e) => setStoreName(e.target.value)}
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Store Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
            value={store_description}
            onChange={(e) => setStoreDescription(e.target.value)}
          ></textarea>
        </label>

        {/* Form buttons */}
        <button className="btn btn-outline btn-sm bg-red-600 text-white mt-2" type="submit">
          Save Edit Store
        </button>
      </form>
      <button className="btn btn-outline btn-sm bg-red-600 text-white mt-2" onClick={closeModal}>
        Close
      </button>
    </div>
  );
}

export default EditStoreForm;
