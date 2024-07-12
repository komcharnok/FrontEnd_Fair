function Filter() {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg mb-2">
      <div className="flex space-x-4">
        <span className="flex items-center text-gray-600 font-semibold">
          เรียงโดย
        </span>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md font-semibold">
          เกี่ยวข้อง
        </button>
        <button className="px-4 py-2 bg-white text-gray-600 rounded-md border font-semibold">
          ล่าสุด
        </button>
        <button className="px-4 py-2 bg-white text-gray-600 rounded-md border font-semibold">
          สินค้าขายดี
        </button>
        <select className="px-4 py-2 bg-white text-gray-600 rounded-md border font-semibold focus:outline-none focus:ring-2 focus:ring-red-500">
          <option className="py-2">ราคา</option>
          <option className="py-2">ราคา: จากน้อยไปมาก</option>
          <option className="py-2">ราคา: จากมากไปน้อย</option>
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-red-500 font-semibold">1</span>
        <span className="text-gray-600">/ 17</span>
        <button className="px-2 py-2 bg-white text-gray-600 rounded-md border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button className="px-2 py-2 bg-white text-gray-600 rounded-md border">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Filter;
