

// ---------------------------- NO Header Navbar ----------------------------------//


function DashboardTest() {

    // const [orders, setOrders] = useState([]);
    // const [dailyOrders, setDailyOrders] = useState(0)
    // const [monthlyOrders, setMonthlyOrders] = useState(0)
    // const [yearlyOrders, setYearlyOrders] = useState(0)
    // const [products, setProducts] = useState([])
    // const [dailyProducts, setDailyProducts] = useState(0)
    // const [monthlyProducts, setMonthlyProducts] = useState(0)
    // const [yearlyProducts, setYearlyProducts] = useState(0)
    // const [Price, setPrice] = useState([])
    // const [dailyPrice, setDailyPrice] = useState(0)
    // const [monthlyPrice, setMonthlyPrice] = useState(0)
    // const [yearlyPrice, setYearlyPrice] = useState(0)


    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         try {
    //             const res = await axios.get("เส้น API ของ orders")
    //             setOrders(res.data) //check res.data.order?
    //         } catch (error) {
    //             console.log("error fecthing orders")
    //         }
    //         fetchOrders();
    //     }
    // }, [])

    // useEffect(() => {
    //     if (orders.length > 0) {
    //         calculateOrderstats(orders);
    //     }
    // }, [orders])

    // const calculateOrderstats = (orders) => {
    //     const today = new Date();
    //     const startOfDay = new Date(today.setHours(0, 0, 0, 0))
    //     const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1)
    //     const setOfYear = new Date(today.getFullYear(), 0, 1)

        
    //     const dailyOrdersCount = orders.filter(order => new Date(order.createdAt) >= startOfDay).length
    //     const monthlyOrdersCount = orders.filter(order => new Date(order.createdAt) >= startOfMonth).length
    //     const yearlyOrdersCount = orders.filter(order => new Date(order.createdAt) >= startOfYear).length

        

    //     // ------- Product --------//
    //     const dailyProductCounts = {};
    //     const monthlyProductCounts = {};
    //     const yearlyProductCounts = {};

    //     const productCounts = {};
    //     orders.forEach(order => {
    //         order.product.forEach(product => {
    //             if (productCounts[product.product_id]) {
    //                 productCounts[product.product_id]++;
    //             } else {
    //                 productCounts[product.product_id] = 1;
    //             }
    //         })
    //     })
    //     const mostPurchased = Object.keys(productCounts).reduce((a, b) => productCounts[a] > productCounts[b] ? a : b);

    //     setDailyOrders(dailyOrdersCount);
    //     setMonthlyOrders(monthlyOrdersCount);
    //     setYearlyOrders(yearlyOrdersCount);

    //     setDailyProducts(dailyProductsCount);
    //     setMonthlyProducts(monthlyProductsCount);
    //     setYearlyProducts(yearlyProductsCount);

    //     setMostPurchasedProduct(mostPurchased);
    // }



    return (
        <>
            <div class="container mx-auto ">
                <div className="card bg-base-100 text-black content w-auto shadow-xl">
                    <div className="card-body">
                        <div class="flex justify-between">
                            <div>
                                <div className="flex items-center">
                                    <p className="card-title2">ช่วงเวลา</p>
                                </div>
                                <p className="card-title3">ประจำวัน</p>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <p className="card-title2">คำสั่งซื้อ</p>
                                </div>
                                <p className="card-title3">XXX : ออเดอร์</p>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <p className="card-title2">จำหน่ายสิ้นค้า</p>
                                </div>
                                <p className="card-title3">XXX : ชิ้น</p>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <p className="card-title2">รายได้</p>
                                </div>
                                <p className="card-title3">XXX : บาท</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 text-black content w-auto shadow-xl mt-5">
                    <div className="card-body">
                        <div class="flex justify-between">
                            <div>
                                <div className="flex items-center">
                                    <p className="card-title2">ช่วงเวลา</p>
                                </div>
                                <p className="card-title3">ประจำเดือน</p>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <p className="card-title2">คำสั่งซื้อ</p>
                                </div>
                                <p className="card-title3">XXX : ออเดอร์</p>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <p className="card-title2">จำหน่ายสินค้า</p>
                                </div>
                                <p className="card-title3">XXX : ชิ้น</p>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <p className="card-title2">รายได้</p>
                                </div>
                                <p className="card-title3">XXX : บาท</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 text-black content w-auto shadow-xl mt-5">
                    <div className="card-body">
                        <div class="flex justify-between">
                            <div>
                                <div className="flex items-center">
                                    <p className="card-title2">ช่วงเวลา</p>
                                </div>
                                <p className="card-title3">ประจำปี</p>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <p className="card-title2">คำสั่งซื้อ</p>
                                </div>
                                <p className="card-title3">XXX : ออเดอร์</p>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <p className="card-title2">จำหน่ายสินค้า</p>
                                </div>
                                <p className="card-title3">XXX : ชิ้น</p>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <p className="card-title2">รายได้</p>
                                </div>
                                <p className="card-title3">XXX : บาท</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mx-auto flex justify-between">
                    <div class="mt-5">
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure class="w-10 ml-5">
                                <img src="pic/totalproduct.svg" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">ยอดขายทั้งหมด</h2>
                                <h2 className="card-title">รวม : XXX ชิ้น</h2>
                                {/* <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 ">
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure class="w-10 ml-5">
                                <img src="pic/totalproductsale.svg" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">รายได้ทั้งหมด</h2>
                                <h2 className="card-title">รวม : XXX บาท</h2>
                            </div>
                        </div>
                    </div>
                    <div class="mt-5 ">
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure class="w-10 ml-5">
                                <img src="pic/totalproductsale.svg" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">สินค้ายอดนิยม</h2>
                                <h2 className="card-title">จำหน่ายไป : XXX ชิ้น</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard