

// ---------------------------- NO Header Navbar ----------------------------------//


function Dashboard() {


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