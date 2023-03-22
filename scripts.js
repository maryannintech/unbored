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

async function getAcitvity() {
    const apiURL = "https://www.boredapi.com/api/activity/";
    let randomActivity = await fetch(apiURL);
    let data = await randomActivity.json();
    let {activity} = data;
    activityScreen.textContent = activity;
}

async function educationClicked() {
    const apiURL = "http://www.boredapi.com/api/activity?type=education";
    let randomActivity = await fetch(apiURL);
    let data = await randomActivity.json();
    let {activity} = data;
    activityScreen.textContent = activity;
}

async function recreationalClicked() {
    const apiURL = "http://www.boredapi.com/api/activity?type=recreational";
    let randomActivity = await fetch(apiURL);
    let data = await randomActivity.json();
    let {activity} = data;
    activityScreen.textContent = activity;
}

async function socialClicked() {
    const apiURL = "http://www.boredapi.com/api/activity?type=social";
    let randomActivity = await fetch(apiURL);
    let data = await randomActivity.json();
    let {activity} = data;
    activityScreen.textContent = activity;
}

async function diyClicked() {
    const apiURL = "http://www.boredapi.com/api/activity?type=diy";
    let randomActivity = await fetch(apiURL);
    let data = await randomActivity.json();
    let {activity} = data;
    activityScreen.textContent = activity;
}

async function charityClicked() {
    const apiURL = "http://www.boredapi.com/api/activity?type=charity";
    let randomActivity = await fetch(apiURL);
    let data = await randomActivity.json();
    let {activity} = data;
    activityScreen.textContent = activity;
}

async function cookingClicked() {
    const apiURL = "http://www.boredapi.com/api/activity?type=cooking";
    let randomActivity = await fetch(apiURL);
    let data = await randomActivity.json();
    let {activity} = data;
    activityScreen.textContent = activity;
}

async function relaxationClicked() {
    const apiURL = "http://www.boredapi.com/api/activity?type=relaxation";
    let randomActivity = await fetch(apiURL);
    let data = await randomActivity.json();
    let {activity} = data;
    activityScreen.textContent = activity;
}

async function musicClicked() {
    const apiURL = "http://www.boredapi.com/api/activity?type=music";
    let randomActivity = await fetch(apiURL);
    let data = await randomActivity.json();
    let {activity} = data;
    activityScreen.textContent = activity;
}

async function busyworkClicked() {
    const apiURL = "http://www.boredapi.com/api/activity?type=busywork";
    let randomActivity = await fetch(apiURL);
    let data = await randomActivity.json();
    let {activity} = data;
    activityScreen.textContent = activity;
}
