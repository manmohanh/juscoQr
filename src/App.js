import {useState} from "react"
import ScanQr from "./screens/qrScan/ScanQr";
import "./App.css";
import logo from "./Images/logo.png";
import {BrowserRouter, Router, Routes, Route } from "react-router-dom";
import BasicTable from "./screens/questions";

function App() {

  const [data, setData] = useState("");

  return (
    <div className="App">
      <img src={logo} className="img" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ScanQr data={data} setData={setData}/>} />
          <Route path="/questions" element={<BasicTable data={data}/>} />
        </Routes>
      </BrowserRouter>
      {/* <ScanQr /> */}
    </div>
  );
}

export default App;
