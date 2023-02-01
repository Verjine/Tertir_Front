import React, { useState } from "react";
import logo from "../logo.png";
import "./style.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { checkCode } from "../api/starter";
import Modal from "./Modal";
// import {CgLayoutGrid} from "react-icons/all";

function Hamburger(props) {
  const [code, setCode] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [info, setInfo] = useState({});

  const handleClick =   () => {
   checkCode(code,setInfo);
   setModalOpen(true);
  };
  console.log(info, 'info')
// console.log(checkCode())
//   const handleSubmit = () => {
//     checkCode(code);
//     console.log(info)
//   };
// console.log(code)
  const handleChangeCode = (e) => {
    const { value } = e.target;

    setCode(value)

  };

  // const callModal = () =>{
  //   setModalOpen(true)
  // }

  return (
    <div className="hamburgermenu">
      <div onClick={props.prevhamburger} className="humburger">
        <GiHamburgerMenu />
      </div>

      <div className="logo_wrapper">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <h2 className="hmb_text">Լրացրեք Ձեր կոդը</h2>
      <div className="code1">
        <form>
          <input
            className="hmb_input"
            type="text"
            // value={props.values.previousQrCodeId}
            onChange={handleChangeCode}
            // name="previousQrCodeId"
            required
          />
        </form>
      </div>
      <div className="hmb_btn">
        <button className="hmb_accept" onClick={handleClick}>
          Ստուգել
        </button>
      </div>
      {modalOpen ? (
        <Modal
          info={info}
          setOpenModal={setModalOpen}
          onClose={() => setModalOpen(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Hamburger;
