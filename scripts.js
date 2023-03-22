let apiURL;

async function getAcitvity(url) {
    url = apiURL;
    let randomActivity = await fetch(url);
    let data = await randomActivity.json();
    let {activity} = data;
    activityScreen.textContent = activity;
}

async function educationClicked() {
    apiURL = "http://www.boredapi.com/api/activity?type=education";
    getAcitvity(apiURL);
}

async function recreationalClicked() {
    apiURL = "http://www.boredapi.com/api/activity?type=recreational";
    getAcitvity(apiURL);
}

async function socialClicked() {
    apiURL = "http://www.boredapi.com/api/activity?type=social";
    getAcitvity(apiURL);
}

async function diyClicked() {
    apiURL = "http://www.boredapi.com/api/activity?type=diy";
    getAcitvity(apiURL);
}

async function charityClicked() {
    apiURL = "http://www.boredapi.com/api/activity?type=charity";
    getAcitvity(apiURL);
}

async function cookingClicked() {
    apiURL = "http://www.boredapi.com/api/activity?type=cooking";
    getAcitvity(apiURL);;
}

async function relaxationClicked() {
    apiURL = "http://www.boredapi.com/api/activity?type=relaxation";
    getAcitvity(apiURL);
}

async function musicClicked() {
    apiURL = "http://www.boredapi.com/api/activity?type=music";
    getAcitvity(apiURL);;
}

async function busyworkClicked() {
    apiURL = "http://www.boredapi.com/api/activity?type=busywork";
    getAcitvity(apiURL);
}

const educationBtn = document.querySelector(".education").addEventListener("click", educationClicked);
const recreationalBtn = document.querySelector(".recreational").addEventListener("click", recreationalClicked);
const socialBtn = document.querySelector(".social").addEventListener("click", socialClicked);
const diyBtn = document.querySelector(".diy").addEventListener("click", diyClicked);
const charityBtn = document.querySelector(".charity").addEventListener("click", charityClicked);
const cookingBtn = document.querySelector(".cooking").addEventListener("click", cookingClicked);
const relaxationBtn = document.querySelector(".relaxation").addEventListener("click", relaxationClicked);
const musicBtn = document.querySelector(".music").addEventListener("click", musicClicked);
const busyworkBtn = document.querySelector(".busywork").addEventListener("click", busyworkClicked);

const activityScreen = document.querySelector(".activity");
