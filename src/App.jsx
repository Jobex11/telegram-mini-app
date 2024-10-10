import "./App.css";
import Footer from "./Footer";
import Moon from "./Moon";
function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Moon />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
