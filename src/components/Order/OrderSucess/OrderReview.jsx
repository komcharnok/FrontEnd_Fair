import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderReview({ orderUser }) {
  return (
    <div>
      <div className='container mx-auto px-4 mt-3'>
        <div className="shadow-md p-4 mt-9">
          <div className='flex justify-between items-center w-full  '>
            <div className="badge badge-accent badge-outline ml-4">
              ชำระเสร็จสิ้น
            </div>
          </div>
          {orderUser.map((item) => (
            <div className='border-b-2 border-gray-200 pb-4'>
              <div key={item.order_id} className="item h-auto   p-4 mt-3 flex border-b-2 border-gray-200 ">
                <img src={item.product.product_pic} className='object-cover rounded shadow-lg h-44 w-52' alt={item.product_title} />
                <div className="txt ml-2 flex-grow">
                  <div className='flex w-full ml-1'>
                    <div className='w-1/2'>
                      <div className="badge badge-lg">ชื่อสินค้า</div>
                      <p className='text-black mt-1'>{item.product.product_title}</p>
                    </div>
                    <div className='w-1/3 text-center'>
                      <div className="badge badge-lg">จำนวน</div>
                      <p className='text-black mt-1'>{item.quantity}</p>
                    </div>
                    <div className='w-1/2 text-end'>
                      <div className="badge badge-lg">ราคาต่อชิ้น</div>
                      <p className='text-black mt-1'>$  {item.product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
                <div className='h-12 flex justify-end   mx-auto items-center  gap-2    '>
                  <Link to={`/home/productdetail/${item.product.product_id}`} key={item.product.product_id}>
                    <button type="button" className='btn mt-4 w-32 bg-red-500 hover:bg-red-700 text-white rounded-3xl'>รีวิว</button>
                  </Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
