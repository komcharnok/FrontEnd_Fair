
function ReviewPage3() {

    const data = {
        review_id : 3,

        user_name: "Kritt",

        product_title: "iphone 13",

        content: "ของไม่มีตำหนิ ได้ตามที่สั่ง แต่รอส่งค่อนข้างนาน",
    }


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomRating = getRandomInt(3, 3);


    return (
        <>
            <div className="container mx-auto">
                <div class="card text-primary-content w-auto">
                    <div class="card-body">
                        <div class="card-review-user">
                            <p class="text-black">{data.user_name}</p>
                        </div>
                        {/* <div className="rating rating-sm">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-6"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        </div> */}
                        <span className="text-yellow-500">
                            {"★".repeat(randomRating)}
                            {"☆".repeat(5 - randomRating)}
                            {/* {"★".repeat(product.rating)}
                            {"☆".repeat(5 - product.rating)} */}
                        </span>
                    <div class="card-review-product">
                        <p class="text-black">Product : {data.product_title} </p>
                    </div>
                    <div class="card-review-content text-black">
                        <p> {data.content} </p>
                    </div>
                    <div class="pic max-w-[100px] max-h-[100px] flex gap-3">
                        {/* <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                        <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" /> */}
                    </div>
                </div>
            </div>
        </div >
        <hr />
        </>
    )
}

export default ReviewPage3