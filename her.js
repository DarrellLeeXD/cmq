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


