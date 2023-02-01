import React from "react";

function Modal({ setOpenModal, info }) {
  const { username, number1, number2, number3, number4, number5 } = info;
  console.log(username);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <ul>
          <li className="username"> {username} </li>
          <div className="list">
          <li> Համար 1 {number1}</li>
          <li> Համար 2 {number2}</li>
          <li> Համար 3 {number3}</li>
          <li> Համար 4 {number4}</li>
          <li> Համար 5 {number5}</li>
          </div>
        </ul>

        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

{
  /* <div className="body">
{info.map}         
 </div> */
}
