
function ReviewPage2() {

    const data = {
        review_id : 2,

        user_name: "Pramote",

        product_title: "iphone 13",

        content: "ได้สินค้าตามที่สั่งไปเลยครับ การจัดส่งถือว่ารวดเร็วครับ ราคาคุ้มค่า",
    }


    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomRating = getRandomInt(4, 4);


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
                        <span className="text-yellow-500" >
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
                        <img src="https://down-bs-th.img.susercontent.com/th-11134103-7r992-lpkbnqs2yblr69.webp" alt="" />
                        <img src="https://down-bs-th.img.susercontent.com/th-11134103-7r98x-lltabclr4bnrd3.webp" alt="" />
                        <img src="https://down-bs-th.img.susercontent.com/th-11134103-7r98r-lpkbnqs3drtg1f.webp" alt="" />
                    </div>
                </div>
            </div>
        </div >
        <hr />
        </>
    )
}

export default ReviewPage2