import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";

function App() {
  const [selectedItem, setSelctedItem] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remainCredit, setRemainCredit] = useState(20);
  const [total, setTotal] = useState(0);
  const selectHandle = (item) => {
    setCredit(credit + item.credit);

    setRemainCredit(remainCredit - item.credit);

    setTotal(total + item.course_price);
    setSelctedItem([...selectedItem, item]);
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
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
