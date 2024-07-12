import shopImage from "../../assets/img/shrit.jpg";

function RecommendedShops() {
  return (
    <div className="p-4 bg-gray-100 rounded-lg mb-4">
      <div className="text-gray-600 font-semibold mb-2">
        ร้านค้าที่เกี่ยวข้องกับ <span className="text-red-500">คีย์บอร์ด</span>
        <span className="float-right text-red-500 cursor-pointer">
          ร้านค้าอื่นๆ {">"}
        </span>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md flex items-center">
        <img
          src={shopImage}
          alt="shop"
          className="w-20 h-20 rounded-full mr-4"
        />
        <div className="flex-1">
          <div className="flex items-center mb-1">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded mr-2">
              ร้านแนะนำ
            </span>
            <span className="text-gray-600 text-sm">
              23.1พัน ผู้ติดตาม | 3.5พัน กำลังติดตาม
            </span>
          </div>
          <h2 className="text-xl font-semibold">easybuy_mall</h2>
          <p className="text-gray-500">easybuy_mall</p>
        </div>
        <div className="flex space-x-4">
          <div className="text-center">
            <span className="text-red-500 font-semibold">165</span>
            <p className="text-gray-600">สินค้า</p>
          </div>
          <div className="text-center">
            <span className="text-red-500 font-semibold">4.7</span>
            <p className="text-gray-600">คะแนน</p>
          </div>
          <div className="text-center">
            <span className="text-red-500 font-semibold">96%</span>
            <p className="text-gray-600">อัตราการตอบกลับ</p>
          </div>
          <div className="text-center">
            <span className="text-red-500 font-semibold">
              ภายในไม่กี่ชั่วโมง
            </span>
            <p className="text-gray-600">เวลาในการตอบกลับ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendedShops;
