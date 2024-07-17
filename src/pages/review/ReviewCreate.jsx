import { useState, useContext } from "react";
import { Link } from "react-router-dom";

// ---------------------------- NO Header Navbar ----------------------------------//

function ReviewCreate() {


    // const [rating, setRating] = useState(0);
    // const [content, setContent] = useState("");

    // const hdlRatingChange = (e) => {
    //     setRating(e.target.value)
    // }
    // const hdlContentChange = (e) => {
    //     setContent(e.target.value)
    // }

    // const hdlSubmit = () => {
    //     console.log("rating", rating)
    //     console.log("content", content)
    //     setRating(0)
    //     setContent(" ")
    // }

    // const hdlCancel = () => {
    //     console.log("ยกเลิก")
    //     setRating(0)
    //     setContent(" ")
    // }

    return (
        <>
            <div className="container mx-auto">
                <div class="card text-primary-content w-auto ">
                    <div class="card-body">
                        <div class="card-review-user">
                            <p class="text-black">Nattapong</p>
                        </div>
                        <div class="card-review-product">
                            <p class="text-black">Product : iPhone 13</p>
                        </div>

                        <div className="rating rating-sm mt-5" >
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" value={1} />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" value={2} />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" value={3} />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" value={4} />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" value={5} />
                        </div>
                        <p class="text-black">ให้คะแนนสินค้านี้</p>

                        {/* <div class="card-review-content "> */}
                        {/* <textarea className="textarea textarea-bordered w-auto mt-5 " placeholder="กรอกรีวิวของคุณลงที่นี่"  ></textarea> */}
                     
                        <textarea
                            type="text"
                            className='textarea textarea-bordered w-auto h-60'
                            placeholder="กรอกรีวิวของคุณลงที่นี่"
                        />
                      
                        <div className="flex justify-end mt-6">
                            <Link to="/home/productdetail/1">
                                <button type="button" className='btn mt-4 w-32 bg-red-500 hover:bg-red-700 text-white rounded-3xl'>สร้างรีวิว</button>
                            </Link>
                        </div>
                        {/* </div> */}
                        {/* <div class="pic">
                            
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewCreate

