import React, { useState } from "react";
import MainPage from "./MainPage";
import SecondPage from "./SecondPage";
import Register from "./Register";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import { postData } from "../api/starter";
import Hamburger from "./Hamburger";
import FirstPage from "./FirstPage";

function UserForm(props) {
  const [state, setState] = useState({
    step: 1,
    username: "",
    idBankNumber: "",
    otherBankNumber: "",
    currentQrCodeId: "",
    previousQrCodeId: "",
  });
  // Proceed to next step

  // useEffect(() => {

  //    if(state.currentQrCodeId) {
  //     setState({
  //       ...state,
  //       step: 3
  //     })

  //    }
  //   })


  const hamburger = () => {
    const { step } = state;
    setState({
      ...state,
      step: step + 4,
    });
  };

  const prevhamburger = () => {
    const { step } = state;
    setState({
      ...state,
      step: step - 4,
    });
  };
  const hide = () => {
    if (state.currentQrCodeId) {
      setState({
        ...state,
        step: 3,
      });
    }
  };

  const nextStep = () => {
    const { step } = state;
    setState({
      ...state,
      step: step + 1,
    });
  };

  // Go back to prev step
  const prevStep = () => {
    const { step } = state;
    setState({
      ...state,
      step: step - 1,
    });
  };
  const aboutStep = () => {
    const { step } = state;
    setState({
      ...state,
      step: 7,
    });
  }
  const prevaboutStep = () => {
    const { step } = state;
    setState({
      ...state,
      step: 1,
    });

  }

  // Handle fields change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const { step } = state;

  switch (step) {

    case 1:
      return (
        <MainPage
          nextStep={nextStep}
          handleChange={handleChange}
          values={state}
          hamburger={hamburger}
          prevStep={prevStep}
          aboutStep={aboutStep}

        />
      );

    case 2:
      return (
        <SecondPage
          handleChange={handleChange}
          values={state}
          setState={setState}
          hide={hide}
        />
      );
    case 3:
      return (
        <Register
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={state}
        />
      );
    case 4:
      return (
        <FourthPage
          handleChange={handleChange}
          prevStep={prevStep}
          nextStep={nextStep}
          values={state}
          postData={postData}
        />
      );

    case 5:
      return (
        <FifthPage
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          setState={setState}
          values={state}
        />
      );

    case 6:
      return (<Hamburger
        hamburger={hamburger}
        prevhamburger={prevhamburger}
      />);

    case 7:
      return (
        <FirstPage
          nextStep={nextStep}
          handleChange={handleChange}
          aboutStep={aboutStep}
          prevaboutStep={prevaboutStep}
        />
      );

    default:
      console.log(props);
  }
}

export default UserForm;
