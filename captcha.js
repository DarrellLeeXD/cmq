const images = [  
    { src: "furball.PNG", object: "furball", correctIndexes: [0,1,2,4] },
    { src: "mind freezer.PNG", object: "mind freezer", correctIndexes: [4,7] },
    { src: "yellowtail fish.PNG", object: "yellowtail fish", correctIndexes: [0,1,2,3,4,5,8]},
    { src: "keki.PNG", object: "keki", correctIndexes: [7,8] },
    { src: "fine shyt.PNG", object: "fine shyt", correctIndexes: [1,4,6,7,8] }
];

let currentImageIndex = 0;
const grid = document.getElementById("captcha-grid");
const instructionText = document.getElementById("target-object");

function loadCaptcha() {
    grid.innerHTML = ""; // Clear previous grid
    let image = images[currentImageIndex];

    instructionText.textContent = image.object; // Update prompt

    let img = new Image();
    img.src = image.src;
    img.onload = function () {
        for (let i = 0; i < 9; i++) {  // 3x3 grid
            let cell = document.createElement("div");
            cell.style.backgroundImage = `url('${img.src}')`;
            cell.style.backgroundSize = "300px 300px"; // Fit full image
            cell.style.backgroundPosition = `${-(i % 3) * 100}px ${-Math.floor(i / 3) * 100}px`;
            cell.dataset.index = i;
            cell.addEventListener("click", () => toggleSelection(cell));
            grid.appendChild(cell);
        }
    };

    img.onerror = function () {
        console.error(`Failed to load image: ${image.src}`);
    };
}

// Toggle selection on grid boxes
function toggleSelection(cell) {
    cell.classList.toggle("selected");
}

// Verify user selection
document.getElementById("verify-btn").addEventListener("click", () => {
    let selectedIndexes = Array.from(document.querySelectorAll(".captcha-grid div.selected"))
                               .map(cell => parseInt(cell.dataset.index));

    let correctIndexes = images[currentImageIndex].correctIndexes;

    let isCorrect = selectedIndexes.every(i => correctIndexes.includes(i)) &&
                    correctIndexes.every(i => selectedIndexes.includes(i));

    if (isCorrect) {
        alert("✅ Correct! Moving to next image...");
        currentImageIndex++;

        if (currentImageIndex < images.length) {
            loadCaptcha();
        } else {
            alert("🎉 You passed the CAPTCHA!");
            window.location.href = "final.html";
        }
    } else {
        alert("❌ Almost there! Try again.");
    }
});

// Load the first CAPTCHA on page load
loadCaptcha();
