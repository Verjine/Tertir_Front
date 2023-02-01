import React, { useState } from "react";
import { useEffect } from "react";
import logo from "../logo.png";
import "./style.css";
import {postDataContinuer} from "../api/starter"


function FifthPage(props) {
   
  const [code, setCode] = useState("");

  useEffect(() => {
    props.setState({
      ...props.values,
      previousQrCodeId: code,
    });
  }, [code]);

  console.log(code)
console.log(props.values.previousQrCodeId)
  return (
    <>
      <div className="end">
        <div className="logo_wrapper">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <h2 className="text">Լրացրեք Ձեզ նախորդողին հատկացված կոդը</h2>
        <div className="code">
          <input
            className="number"
            type="text"
            value={props.values.previousQrCodeId}
            onChange={props.handleChange}
            name="previousQrCodeId"
            required
          />
        </div>
        <div className="accept">
          <button className="acp_btn" onClick={() => {postDataContinuer(props.values)}}>Հաստատել</button>
        </div>
      </div>
    </>
  );
}

export default FifthPage;
