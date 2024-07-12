function Pagination() {
  return (
    <div className="flex items-center justify-center space-x-2 p-4 rounded-lg mt-10">
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
      <button className="px-4 py-2 bg-red-500 text-white rounded-md">1</button>
      <button className="px-4 py-2 bg-white text-gray-600 rounded-md border">
        2
      </button>
      <button className="px-4 py-2 bg-white text-gray-600 rounded-md border">
        3
      </button>
      <button className="px-4 py-2 bg-white text-gray-600 rounded-md border">
        4
      </button>
      <button className="px-4 py-2 bg-white text-gray-600 rounded-md border">
        5
      </button>
      <span className="px-4 py-2 text-gray-600">...</span>
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
  );
}

export default Pagination;
