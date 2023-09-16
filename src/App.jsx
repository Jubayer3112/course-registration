import "./App.css";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";

function App() {
  return (
    <>
      <main className="bg-[#f3f3f3]">
        <div className="container mx-auto">
          <h1 className="text-center text-[#1C1B1B] font-bold text-4xl py-14">Course Registration</h1>
          <div className="flex items-start gap-9">
            <Courses></Courses>
            <Cart></Cart>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
