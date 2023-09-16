import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedItem, setSelctedItem] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remainCredit, setRemainCredit] = useState(20);
  const [total, setTotal] = useState(0);
  const selectHandle = (item) => {
    const isExist = selectedItem.find((cartItem) => cartItem.id === item.id);
    if (isExist) {
      return toast("This course is alredy added");
    } else if (remainCredit - item.credit < 0) {
      return toast(
        "You havent enough credit to purchase this course. Your credit limit has been exceeded"
      );
    }
    setSelctedItem([...selectedItem, item]);
    setCredit(credit + item.credit);
    setRemainCredit(remainCredit - item.credit);
    setTotal(total + item.course_price);
  };
  return (
    <>
      <main className="bg-[#f3f3f3]">
        <div className="container mx-auto">
          <h1 className="text-center text-[#1C1B1B] font-bold text-4xl py-14">
            Course Registration
          </h1>
          <div className="flex items-start gap-9">
            <Courses selectHandle={selectHandle}></Courses>
            <Cart
              selectedItem={selectedItem}
              credit={credit}
              remainCredit={remainCredit}
              total={total}
            ></Cart>
            <ToastContainer />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
