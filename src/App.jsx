import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="font-fontPadrao text-white w-full h-screen mx-auto px-8">
      <Navbar />
      <div className="max-w-[1000px] mx-auto my-8 flex justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
