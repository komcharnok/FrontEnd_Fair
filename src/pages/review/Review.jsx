
// ---------------------------- NO Header Navbar ----------------------------------//

function ReviewPage() {


    return (
        <>
            <div className = "container mx-auto"> 
                <div class="card text-primary-content w-auto">
                    <div class="card-body">
                        <div class="card-review-user">
                            <p class="text-black">Username</p>
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
                        <div class="card-review-product">
                            <p class="text-black">Product : XXX</p>
                        </div>
                        <div class="card-review-content text-black">
                            <p> content EX. เหล็กหนา ประกอบง่าย ได้รับสินค้าเรียบร้อย ส่งเร็วมากครับ ราคาไม่แพง แนะนำร้านนี้ครับ</p>
                        </div>
                        {/* <div class="pic">
                            
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewPage