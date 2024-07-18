/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useStore } from '../../store/storeStore';


function CreateStoreForm({ closeModal, user_id }) {  
    const {
        store_name,
        store_description,
        setStoreName,
        setStoreDescription,
        createStore,
        // fetchStores
    } = useStore();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const storeData = {
            store_name,
            store_description,
            user_id
        };

        await createStore(storeData);
        // fetchStores();
        closeModal(); // Close the modal after creating the store
    };
    
console.log(user_id);
    return (
        <div className="border flex flex-col mx-auto p-3">
            <h1 className="text-2xl">Join Your Store</h1>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                {/* store name */}
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

                {/* store description */}
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Store Description</span>
                    </div>
                    <textarea
                        className="textarea textarea-bordered h-16"
                        placeholder="Bio"
                        value={store_description}
                        onChange={(e) => setStoreDescription(e.target.value)}
                    ></textarea>
                </label>

                {/* store profile picture */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Store Profile Picture</span>
                    </div>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </label>

                {/* store cover picture */}
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Store Cover Picture</span>
                    </div>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </label>

                <button className="btn btn-outline  btn-sm bg-red-600 text-white mt-2" type="submit">
                    Create Store
                </button>
            </form>
            <button className="btn btn-outline  btn-sm bg-red-600 text-white mt-2" onClick={closeModal}>
                Close
            </button>
        </div>
    );
}

export default CreateStoreForm;
