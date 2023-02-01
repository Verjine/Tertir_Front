import React from "react";
import "./style.css";
import logo from '../logo.png';



function FirstPage(props) {
  return (
    <div className="logo_page">
      <div className='logo_wrapper'>
        <img className='logo' src={logo} alt='logo' />
      </div>
      <div className="txt_page">
        <div className="text_1">
          <p>
            Ձեզ ենք ներկայացնում ցանցային վաճառքի մեր տարբերակը խաչբառերի և սկանվորդների միջոցով: Մնում է միայն
            սկանավորել ներքևում նշված QR կոդը, և բացված կոդը կիսվել ընկերների հետ: Հավաքածուները կարող եք ձեռք
            բերել Երևանում մամուլի կրպակներից և ՀՀ ողջ տարածքում Հայ-Փոստի մասնաճյուղերից: Մանրամասն
            տեղեկություն ստանալու համար կարող եք գրել info@tertir.am էլեկտրոնային հասցեին:
          </p>
        </div>
      </div>
      <div className="fst_btn">
        <button className="btn_fst" onClick={props.prevaboutStep}>Անցնել առաջ</button>
      </div>
    </div>
  );
}

export default FirstPage;
