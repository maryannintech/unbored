let apiURL;

async function getAcitvity(url) {
    url = apiURL;
    let randomActivity = await fetch(url);
    let data = await randomActivity.json();
    let {activity} = data;
    activityScreen.textContent = activity;
}

function buttonClicked(type) {
    switch(type) {
        case "edu":
            apiURL = "http://www.boredapi.com/api/activity?type=education";
            getAcitvity(apiURL);
            break;
        case "recrea":
            apiURL = "http://www.boredapi.com/api/activity?type=education";
            getAcitvity(apiURL);
            break;
        case "social":
            apiURL = "http://www.boredapi.com/api/activity?type=social";
            getAcitvity(apiURL);
            break;
        case "diy":
            apiURL = "http://www.boredapi.com/api/activity?type=diy";
            getAcitvity(apiURL);
            break;
        case "charity":
            apiURL = "http://www.boredapi.com/api/activity?type=charity";
            getAcitvity(apiURL);
            break;
        case "cooking":
            apiURL = "http://www.boredapi.com/api/activity?type=cooking";
            getAcitvity(apiURL);
            break;
        case "relaxation":
            apiURL = "http://www.boredapi.com/api/activity?type=relaxation";
            getAcitvity(apiURL);
            break;
        case "music":
            apiURL = "http://www.boredapi.com/api/activity?type=music";
            getAcitvity(apiURL);
            break;
        case "busywork":
            apiURL = "http://www.boredapi.com/api/activity?type=busywork";
            getAcitvity(apiURL);
            break;
        }
}

const educationBtn = document.querySelector(".education").addEventListener("click", () => {buttonClicked("edu")});
const recreationalBtn = document.querySelector(".recreational").addEventListener("click", () => {buttonClicked("recrea")});
const socialBtn = document.querySelector(".social").addEventListener("click", () => {buttonClicked("social")});
const diyBtn = document.querySelector(".diy").addEventListener("click", () => {buttonClicked("diy")});
const charityBtn = document.querySelector(".charity").addEventListener("click", () => {buttonClicked("charity")});
const cookingBtn = document.querySelector(".cooking").addEventListener("click", () => {buttonClicked("cooking")});
const relaxationBtn = document.querySelector(".relaxation").addEventListener("click", () => {buttonClicked("relaxation")});
const musicBtn = document.querySelector(".music").addEventListener("click", () => {buttonClicked("music")});
const busyworkBtn = document.querySelector(".busywork").addEventListener("click", () => {buttonClicked("busywork")});

const activityScreen = document.querySelector(".activity");
