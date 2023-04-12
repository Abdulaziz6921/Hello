import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import MainPage from "./Pages/Home";
function App() {
  return (
    <Login />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/Home" element={<MainPage />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
