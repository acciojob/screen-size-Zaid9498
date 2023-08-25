//your JS code here. If required.
const sizeInfoDiv = document.getElementById("sizeInfo");
const sizeText = document.createElement("h1");

function updateSizeInfo() {
    sizeText.textContent = `Width: ${window.innerWidth} Height: ${window.innerHeight}`;
}

window.addEventListener("resize", updateSizeInfo);

sizeInfoDiv.appendChild(sizeText);

// Initial update
updateSizeInfo();
