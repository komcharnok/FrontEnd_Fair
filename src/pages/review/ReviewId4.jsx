
function ReviewPage4() {

    const data = {
        review_id : 4,

        user_name: "AoonHaa",

        product_title: "iphone 13",

        content: "ของแท้แน่นอน แต่สภาพกล่องมีรอยดำๆ พอเปิดกล่องมามีฝุ่นอยู่ที่หลังเครื่อง ไม่เข้าใจเหมือนกันว่าฝุ่นเข้าไปข้างในได้ยังไง",
    }


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomRating = getRandomInt(2, 2);


    return (
        <>
            <div className="container mx-auto">
                <div class="card text-primary-content w-auto ">
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
                    <div class="pic max-w-[100px] max-h-[130px] flex gap-3">
                        {/* {/* <img src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" /> */}
                        <img src="https://down-bs-th.img.susercontent.com/f7bdbca5a0f2d451046df79897338f20.webp" alt="" /> 
                    </div>
                </div>
            </div>
        </div >
        <hr />
        </>
    )
}

export default ReviewPage4