const screenshots = document.querySelectorAll(".screenshot");
let colorDict = {
    0: "#9e1c1c",
    1: "#d88f39",
    2: "#5e8f4d",
    3: "#4ba2d2",
    4: "#7c75ca",
    5: "#c363b4"
};


screenshots.forEach(element => {
    let rInt = Math.floor(Math.random() * 6);
    element.style.backgroundColor = colorDict[rInt];
});