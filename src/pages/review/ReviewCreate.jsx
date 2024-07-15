

// ---------------------------- NO Header Navbar ----------------------------------//

function ReviewCreate() {


    const [rating, setRating] = useState(0);
    const [content, setContent] = useState("");

    const hdlRatingChange = (e) => {
        setRating(e.target.value)
    }
    const hdlContentChange = (e) => {
        setContent(e.target.value)
    }

    const hdlSubmit = () => {
        // console.log("rating", rating)
        // console.log("content", content)
        setRating(0)
        setContent(" ")
    }

    const hdlCancel= () => {
        // console.log("ยกเลิก")
        setRating(0)
        setContent(" ")
    }

    return (
        <>
            <div className ="container mx-auto">
                <div class="card text-primary-content w-auto te">
                    <div class="card-body">
                        <div class="card-review-user">
                            <p class= "text-black">Username</p>
                        </div>
                        <div class="card-review-product">
                            <p class = "text-black">Product : XXX</p>
                        </div>

                        <div className="rating rating-sm" onChange={hdlRatingChange}>
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" value={1}/>
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" value={2}/>
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" value={3}/>
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" value={4}/>
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" value={5}/>
                        </div>
                        <p class="text-black">ให้คะแนนสินค้านี้</p>

                        {/* <div class="card-review-content "> */}
                            <textarea className="textarea textarea-bordered w-auto" placeholder="กรอกรีวิวของคุณลงที่นี่" value={content} onChange={hdlContentChange}></textarea>
                        <div className="button flex justify-end space-x-4 " > 
                            <button className="btn" onClick={hdlSubmit}>ยืนยัน</button>
                            <button className="btn" onClick={hdlCancel}>ยกเลิก</button>
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

