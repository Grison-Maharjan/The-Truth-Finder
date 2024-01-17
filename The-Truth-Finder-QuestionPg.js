const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const suspiciousImg = document.getElementById("suspicious-img");
const suspiciousPara = document.getElementById("suspicious-para");

yesBtn.addEventListener("click", () => {
    window.location.href = "The-Truth-Finder-DestinationPg.html";
});

noBtn.addEventListener("mouseenter", () => {
    let randomCordinateOne = Math.floor(Math.random() * 600);
    let randomCordinateTwo = Math.floor(Math.random() * 900);
    noBtn.style.top = randomCordinateOne + "px";
    noBtn.style.left = randomCordinateTwo + "px";
});

setTimeout(() => {
    suspiciousImg.style.visibility = "visible";
    suspiciousPara.style.visibility = "visible";
},7000);