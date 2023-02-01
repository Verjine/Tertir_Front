import logo from "../logo.png";
import "./style.css";
import { ImBackward } from "react-icons/im";

function FourthPage(props) {
  console.log(props.postData);
  return (
    <>
      <div className="continue">
        <div className="logo_wrapper">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="btns">
          <div className="same">
            <button
              className="same_buttons"
              onClick={() => {
                props.postData(props.values);
              }}
            >
              Սկսող
            </button>
          </div>

          <div className="same">
            <button className="same_buttons" onClick={props.nextStep}>
              Շարունակող
            </button>
          </div>
        </div>
        <div className="icon">
          <button className="same_icon" onClick={props.prevStep}>
            <ImBackward color=" rgb(25, 39, 99)" size="35px" />
          </button>
        </div>
      </div>
    </>
  );
}

export default FourthPage;
