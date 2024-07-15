import CategoryCard from "./CategoryCard";

const categories = [
  {
    name: "ความงามและของใช้ส่วนตัว",
    image:
      "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "",
  },
  {
    name: "เสื้อผ้าแฟชั่นผู้ชาย",
    image:
      "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "",
  },
  {
    name: "กระเป๋า",
    image:
      "https://images.pexels.com/photos/978665/pexels-photo-978665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "",
  },
  {
    name: "รองเท้าผู้หญิง",
    image:
      "https://images.pexels.com/photos/137603/pexels-photo-137603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "",
  },
  {
    name: "นาฬิกาและแว่นตา",
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "",
  },
  {
    name: "สื่อบันเทิงภายในบ้าน",
    image:
      "https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "",
  },
  {
    name: "เครื่องใช้ไฟฟ้าภายในบ้าน",
    image:
      "https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "",
  },
  {
    name: "กล้องและอุปกรณ์ถ่ายภาพ",
    image:
      "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "",
  },
  {
    name: "ของเล่น สินค้าแม่และเด็ก",
    image:
      "https://cdn.pixabay.com/photo/2016/02/13/14/52/doll-1197952_1280.jpg",
    category: "",
  },
  {
    name: "สัตว์เลี้ยง",
    image:
      "https://images.pexels.com/photos/20545902/pexels-photo-20545902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "",
  },
  {
    name: "กลุ่มผลิตภัณฑ์เพื่อสุขภาพ",
    image:
      "https://cdn.pixabay.com/photo/2020/03/31/07/56/face-mask-4986596_1280.jpg",
    category: "",
  },
  {
    name: "เสื้อผ้าแฟชั่นผู้หญิง",
    image:
      "https://cdn.pixabay.com/photo/2023/09/02/11/43/woman-8228723_1280.jpg",
    category: "",
  },
  {
    name: "รองเท้าผู้ชาย",
    image:
      "https://cdn.pixabay.com/photo/2021/03/08/12/31/oxford-shoes-6078993_1280.jpg",
    category: "",
  },
  {
    name: "เครื่องประดับ",
    image:
      "https://cdn.pixabay.com/photo/2015/10/01/15/14/beads-967179_1280.jpg",
    category: "",
  },
  {
    name: "เครื่องใช้ในบ้าน",
    image:
      "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
    category: "",
  },
  {
    name: "มือถือและอุปกรณ์เสริม",
    image:
      "https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "iphone",
  },
  {
    name: "คอมพิวเตอร์และแล็ปท็อป",
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/07/12/apple-1282241_1280.jpg",
    category: "",
  },
  {
    name: "อาหารและเครื่องดื่ม",
    image:
      "https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_1280.jpg",
    category: "",
  },
  {
    name: "กีฬาและกิจกรรมกลางแจ้ง",
    image:
      "https://cdn.pixabay.com/photo/2016/04/12/15/24/inline-skate-1324585_1280.jpg",
    category: "",
  },
  {
    name: "เกมและอุปกรณ์เสริม",
    image:
      "https://cdn.pixabay.com/photo/2017/04/04/18/07/video-game-console-2202570_1280.jpg",
    category: "",
  },
];

function CategoryList() {
  const rows = categories.slice(0, 20);

  return (
    <div className="px-4">
      <div className="flex items-center my-6">
        <div className="bg-red-500 w-2 h-6 mr-2 rounded-sm"></div>
        <h2 className="text-red-500 text-xl font-semibold">หมวดหมู่</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
        {rows.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
      <hr className="my-10 border-t-2 border-gray-200" />
    </div>
  );
}

export default CategoryList;
