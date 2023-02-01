import React, { useState } from "react";
import { useEffect } from "react";
import { QrReader } from "react-qr-reader";
import "./style.css";
import logo from "../logo.png";
import { checkCode } from "../api/starter";

function SecondPage(props) {

  const [data, setData] = useState("");
  useEffect(() => {
    props.setState({
      ...props.values,
      currentQrCodeId: data,
    });
    
  }, [data])


  

  return (
    
    <div className="scan">
      <div className="logo_wrapper">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <h3>Սկանավորեք QR կոդը</h3>

      <QrReader
        className="camera"
        constraints={{
            facingMode: 'environment'
        }}
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            // console.info(error);
          }
        }}
        style={{ width: "100%" }}
      />
      {/* {data} */}

      <button style={{backgroundColor:data? 'LightSteelBlue':'white'}} className="same_button" onClick={props.hide}>
        Շարունակել
      </button>
    </div>
  );
}

export default SecondPage;
