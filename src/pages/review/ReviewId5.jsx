
function ReviewPage5() {

    const data = {
        review_id : 5,

        user_name: "Veew4",

        product_title: "iphone 13",

        content: "ได้ของรับของแล้วค่ะได้มาในราคาดีมาก  ไว้มาสั่งอีกสวยมากกก",
    }


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomRating = getRandomInt(5, 5);


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
                        <img src="https://down-bs-th.img.susercontent.com/2d3ab4e98f10c7c82192fa346f6b3061.webp" alt="" />     
                    </div>
                </div>
            </div>
        </div >
        <hr />
        <div className="text-gray-500 mt-5 flex justify-end">
            <p >ดูรีวิวเพิ่มเติม &gt;	&gt;	&gt; </p>
        </div>
        </>
    )
}

export default ReviewPage5