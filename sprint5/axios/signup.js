const mail = document.querySelector("#email");
const password = document.querySelector("#password");
const sbmtButton = document.querySelector("#submit");

window.addEventListener("load", ()=>{
    mail.value = "eve.holt@reqres.in";
    password.value = "pistol";
});

sbmtButton.addEventListener("click", ()=>{
    postCustomerRegister();
})

const postCustomerRegister = async() =>{
    const bodyData = {
        email : mail.value,
        password : password.value
    };
    try{
        showLoading();
        const response = await axios({
            url:"https://reqres.in/api/register",
            method: "post",
            data : bodyData
        });
        const{data : userData} = response;
        console.log(userData);
        if(userData.token== undefined){
            alert("undefined");
            removeLoading();
        }
        else{
            localStorage.setItem("baseUrl","https://reqres.in");
            localStorage.setItem("apiKey", userData.token);
            removeLoading();
        }
    }
    catch(error){
        alert(error);
    }
}