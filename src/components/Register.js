import React from "react";
import "./style.css";
import logo from "../logo.png";
import { FaPlayCircle } from "react-icons/fa";

function Register(props) {
  return (
    <>
      <div onSubmit={props.handleChange} className="form">
        <div className="logo_wrapper">
          <img className="logo" src={logo} alt="logo" />
        </div>

        <div className="input-bigbox">

          <div className="input_field">
            <input
              className="input"
              type="text"
              value={props.values.username}
              onChange={props.handleChange}
              name="username"
              placeholder="Անուն, Ազգանուն"
              required
            />
          </div>

          <div className="input_field">
            <input
              className="input"
              type="text"
              value={props.values.idBankNumber}
              onChange={props.handleChange}
              name="idBankNumber"
              placeholder="ID դրամապանակ"
              required
            />
          </div>

          <div className="input_field">
            <input
              className="input"
              type="text"
              value={props.values.otherBankNumber}
              onChange={props.handleChange}
              name="otherBankNumber"
              placeholder="Քարտային համար"
              required
            />
          </div>
        </div>

        <div className="icon_wrapper">
          <button className="but" onClick={props.nextStep} type="submit">
            <FaPlayCircle color=" rgb(25, 39, 99)" size="40px" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;
