

// ---------------------------- NO Header Navbar ----------------------------------//

function ReviewCreate() {


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
                        <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-6"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        {/* <div class="card-review-content "> */}
                            <textarea className="textarea textarea-bordered w-auto" placeholder="กรอกรีวิวของคุณลงที่นี่" ></textarea>
                        <div className="button flex justify-end space-x-4 " > 
                            <button className="btn">ยืนยัน</button>
                            <button className="btn">ยกเลิก</button>
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

