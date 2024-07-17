
function ReviewPage1() {

    const data = {
        review_id : 1,

        user_name: "Nattapong",

        product_title: "iphone 13",

        content: "ได้รับสินค้าเรียบร้อย ส่งเร็วมากครับ ราคาไม่แพง แนะนำร้านนี้ครับ",

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

                        <span className="text-yellow-500">
                            {"★".repeat(randomRating)}
                            {"☆".repeat(5 - randomRating)}

                        </span>
                    <div class="card-review-product">
                        <p class="text-black">Product : {data.product_title} </p>
                    </div>
                    <div class="card-review-content text-black">
                        <p> {data.content} </p>
                    </div>
                    <div class="pic max-w-[100px] max-h-[130px] flex gap-3">
                        <img src="https://down-bs-th.img.susercontent.com/th-11134103-22090-l5q2bb6n3ahv9b.webp" alt="" />
                        <img src="https://down-tx-th.img.susercontent.com/th-11134103-7r98t-lsic2m8yc3wdba.webp" alt="" />
                    </div>
                </div>
            </div>
        </div >
        <hr />
        </>
    )
}

export default ReviewPage1