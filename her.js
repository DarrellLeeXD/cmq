document.getElementById("yes-btn").addEventListener("click", function() {
    document.getElementById("response").innerHTML = "Yay! Can't wait! 😍";
});

document.getElementById("no-btn").addEventListener("mouseover", function() {
    let noBtn = this;
    let rect = noBtn.getBoundingClientRect(); // Get button's current position
    let maxMove = 200; // Increase max movement for a bigger floating effect

    let newX = rect.left + (Math.random() * maxMove * 2 - maxMove);
    let newY = rect.top + (Math.random() * maxMove * 2 - maxMove);

    // Keep button inside the page boundaries
    newX = Math.max(20, Math.min(window.innerWidth - rect.width - 20, newX));
    newY = Math.max(20, Math.min(window.innerHeight - rect.height - 20, newY));

    noBtn.style.transition = "transform 0.6s ease-in-out"; // Smooth floating effect
    noBtn.style.transform = `translate(${newX - rect.left}px, ${newY - rect.top}px)`;
});

document.getElementById("yes-btn").addEventListener("click", function() {
    window.location.href = "date.html"; // Redirect to the new page
});


