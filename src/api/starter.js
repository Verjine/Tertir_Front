import axios from "axios";
export const postData = (state) => {

    const data = {};

    const params = new URLSearchParams({
        username: `${state.username}`,
        idBankNumber: `${state.idBankNumber}`,
        otherBankNumber: `${state.otherBankNumber}`,
        currentQrCodeID: `${state.currentQrCodeId}`
    }).toString();

    const url = "https://tertirbackend.com.ru:8443/tertir/public/register/user/starter?" + params;
//
    //http://localhost:8080
    console.log(url)

    axios
        .post(url, data)
        .then(response => {
            console.log(response.data)
            prompt(`Դուք հաջողությամբ գրանցվել եք: Փոխանցեք այս կոդը հաջորդ մասնակցին`, `${response.data}`)
            window.location.replace("/");
        })
        .catch(error => {
            //console.log(error)
            alert(error.response.data.message)
        });

};

export const postDataContinuer = (state) => {

    const data = {};

    const params = new URLSearchParams({
        username: `${state.username}`,
        idBankNumber: `${state.idBankNumber}`,
        otherBankNumber: `${state.otherBankNumber}`,
        currentQrCodeID: `${state.currentQrCodeId}`,
        previousQrCodeID: `${state.previousQrCodeId}`
    }).toString();

    const url = "https://tertirbackend.com.ru:8443/tertir/public/register/user/continuer?" + params;
    console.log(url)

    axios
        .post(url, data)
        .then(response => {
            console.log(response.data)
            prompt(`Դուք հաջողությամբ գրանցվել եք: Փոխանցեք այս կոդը հաջորդ մասնակցին`, `${response.data}`)
            window.location.replace("/");
        })
        .catch(error => {
            alert(error.response.data.message)
        });
};

export const checkCode = async (code,setInfo) => {
    const url =`https://tertirbackend.com.ru:8443/tertir/public/getStatistics/${code}`;
    console.log(url)

   return await   axios
        .get(url)

        .then(response =>setInfo(response.data))
        .catch(error => {
            alert(error.response.data.message)
        });

}