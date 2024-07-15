//-----CreateStoreForm.jsx
/* eslint-disable no-unused-vars */
import axios from "axios"
import { useStore } from "../../store/storeStore"
import React from 'react'

function CreateStoreForm() {
    const {
        opening_date,
        store_name,
        store_description,
        user_id,
        setStoreName,
        setStoreDescription,
        resetForm
    } = useStore()

    const handleSubmit = async (event) => {
        event.preventDefault()

        const storeData = {
            opening_date,
            store_name,
            store_description,
            user_id
        }

        try {
            const response = await axios.post('http://localhost:8000/store', storeData)
            console.log('Store created successfully', response.data)
            resetForm()
        } catch (error) {
            console.error('Error creating store', error)
        }
    }

    return (
        <div className="border w-4/6 min-w-[600px] flex flex-col gap-3 mx-auto p-3">
            <h1 className="text-2xl">Join Your Store</h1>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>

                {/*  store name */}
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
                        className="textarea textarea-bordered h-24" 
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

                <button className="btn btn-outline btn-secondary mt-40" type="submit">Create Store</button>
            </form>
        </div>
    )
}

export default CreateStoreForm
