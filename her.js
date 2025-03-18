document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("response").innerHTML = "Yay! Can't wait! 😍";
});

document.addEventListener("DOMContentLoaded", function () {
    let noBtn = document.getElementById("no-btn");

    function moveButton(isFast) {
        let rect = noBtn.getBoundingClientRect(); // Get button's current position
        let maxMove = isFast ? 250 : 200; // Faster movement on mobile tap

        let newX = rect.left + (Math.random() * maxMove * 2 - maxMove);
        let newY = rect.top + (Math.random() * maxMove * 2 - maxMove);

        // Keep button inside the page boundaries
        newX = Math.max(20, Math.min(window.innerWidth - rect.width - 20, newX));
        newY = Math.max(20, Math.min(window.innerHeight - rect.height - 20, newY));

        noBtn.style.transition = isFast ? "transform 0.3s ease-out" : "transform 0.6s ease-in-out"; 
        noBtn.style.transform = `translate(${newX - rect.left}px, ${newY - rect.top}px)`;
    }

    // Event for desktop (hover)
    noBtn.addEventListener("mouseover", function () {
        moveButton(false); // Smooth movement
    });

    // Event for mobile (tap)
    noBtn.addEventListener("touchstart", function () {
        moveButton(true); // Faster movement
    });
});


document.getElementById("yes-btn").addEventListener("click", function() {
    window.location.href = "date.html"; // Redirect to the new page
});

document.addEventListener("DOMContentLoaded", function () {
    // Create the popup overlay
    let popupOverlay = document.createElement("div");
    popupOverlay.classList.add("popup-overlay");

    // Create the popup box
    let popupBox = document.createElement("div");
    popupBox.classList.add("popup-box");

    // Elegant & playful popup message
    popupBox.innerHTML = `
        <p class="popup-message">
            ✦ 𝒷𝑒 𝒸𝓊𝓇𝒾𝑜𝓊𝓈, 𝒷𝑒 𝒸𝒽𝑒𝑒𝓀𝓎... ✦<br><br>
            ❝ *𝒯𝒽𝒾𝓃𝓀 𝑜𝓊𝓉𝓈𝒾𝒹𝑒 𝓉𝒽𝑒 𝒷𝑜𝓍, 𝓉𝒶𝓅 𝒶𝓇𝑜𝓊𝓃𝒹, 𝑒𝓍𝓅𝓁𝑜𝓇𝑒.* ❞<br><br>
            ☁️✨ *𝒯𝓇𝓊𝓈𝓉 𝓂𝑒, 𝓃𝑜 𝓂𝒶𝓁𝓌𝒶𝓇𝑒—𝒿𝓊𝓈𝓉 𝓈𝑒𝒸𝓇𝑒𝓉 𝓅𝑒𝑒𝓀𝓈 𝑒𝓋𝑒𝓇𝓎𝓌𝒽𝑒𝓇𝑒.* 😌🌸
        </p>
        <button class="popup-btn">☕ 𝒸𝑜𝓊𝓃𝓉 𝓂𝑒 𝒾𝓃!</button>
    `;

    // Append popup to overlay
    popupOverlay.appendChild(popupBox);
    document.body.appendChild(popupOverlay);

    // Close popup when button is clicked
    document.querySelector(".popup-btn").addEventListener("click", function () {
        popupOverlay.style.display = "none";
    });
});






