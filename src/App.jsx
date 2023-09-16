import "./App.css";
import Cart from "./Components/Cart/Cart";
import Courses from "./Components/Courses/Courses";

function App() {
  return (
    <>
      <main className="bg-[#f3f3f3]">
        <div className="container mx-auto">
          <h1 className="py-10 text-center">Course Registration</h1>
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
