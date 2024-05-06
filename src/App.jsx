import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Address from "./components/Address";
import Admin from "./components/Admin";
import Pills from "./components/Pills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="address" element={<Address />} />
            <Route path="admin" element={<Admin />} />
            <Route path="pills" element={<Pills />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
