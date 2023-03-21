const unboredBtn = document.querySelector(".unboredBtn").addEventListener("click", getAcitvity);
const activityScreen = document.querySelector(".activity");

async function getAcitvity() {
    const apiURL = "https://www.boredapi.com/api/activity/";
    let randomActivity = await fetch(apiURL);
    let data = await randomActivity.json();
    let {activity} = data;
    activityScreen.textContent += activity;
}