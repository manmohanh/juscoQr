import React, { useState } from "react";
import axios from "axios";
// import { QrReader } from "react-qr-reader";
import QrReader from 'react-qr-scanner'
import { useNavigate} from "react-router-dom"
import Button from '@mui/material/Button';

const ScanQr = ({data,setData}) => {
  const [houseId, setHouseId] = useState("");

  let navigate = useNavigate()
  console.log(houseId);

  const delay = 100;

  const previewStyle = {
    height: 240,
    width: 320
  };

  const [result, setResult] = useState("");

  const handleScan = (result) => {
    if (result) {
      setResult(result?.text);
      fetchData(result?.text)
    }
  };

 

  const handleError = (error) => {
    console.log(error);
  };

  const fetchData = async (e) => {
    axios
      .get(`https://dev.tsapplications.in/api/v1/amenity/${e}`)
      .then((res) => {setData(res.data);
         if(res.data?.message === "Amenity Not Found")alert(res.data?.message)
        else{
          navigate("/questions")
        }})
  };


  return (
    <div style={{display: "flex"  , alignItems: "center" , flexDirection: "column"}}>
    <div style={{ width:"100%" , maxWidth: "600px"}}>
     <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      
      {/* <p>{result}</p> */}
    </div>
    <Button onClick={() => {navigate("/questions")}} variant="contained">Click</Button>
    </div>
  );
};

export default ScanQr;
