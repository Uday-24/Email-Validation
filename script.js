let email = document.querySelector("#email");

document.querySelector("button").addEventListener("click", async ()=>{
    
    let resultCont = document.querySelector("#result-container");
    resultCont.classList.add("hidden");
    
    let loadingImg = document.querySelector(".validation img")
    loadingImg.classList.remove("hidden"); 
    
    let key = "ema_live_NEHm18bqWBiXzSgS76cnJ55sDagMDIKQ0Cm7791y";
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email.value}`;
    
    let str = ``;
    let res = await fetch(url);
    let response = await res.json();
    
    resultCont.classList.remove("hidden");
    loadingImg.classList.add("hidden");
    for (key of Object.keys(response)){
        if(response[key] !==""){
            str = str + `<div>${key} : ${response[key]}</div>`;
        }
    }
    resultCont.innerHTML = str;
});