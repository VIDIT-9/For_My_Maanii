// script.js

const messages = [
    "Babbyyy.... kya kr rhe h 🙁",
    "Tjhe pareshan krne me bahut mzee aate h naa 😒",
    "Mjhe bura lg rha h 😔",
    "This is Last warning Maanii, before.... 🧐",
    "Last warning before I cry 🥺",
    "Maaniii... You are hurting me 😫",
    "I am crying 😭",
    "💔",
    "💔"
];

let messageIndex = 0;
let runawayActivated = false;

const noButton = document.querySelector(".no-button");
const yesButton = document.querySelector(".yes-button");

function handleNoClick() {
    if (messageIndex < messages.length - 1) {
        noButton.textContent = messages[messageIndex];
        messageIndex++;

        // Grow Yes button
        const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = `${currentSize * 1.5}px`;
    } else {
        if (!runawayActivated) {
            runawayActivated = true;
            activateRunaway(noButton);
        }
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

function activateRunaway(button) {
    button.style.position = "absolute";

    document.addEventListener("mousemove", (e) => {
        const rect = button.getBoundingClientRect();
        const distance = Math.hypot(
            e.clientX - (rect.left + rect.width / 2),
            e.clientY - (rect.top + rect.height / 2)
        );

        if (distance < 100) {
            const newX = Math.random() * (window.innerWidth - rect.width);
            const newY = Math.random() * (window.innerHeight - rect.height);

            button.style.left = `${newX}px`;
            button.style.top = `${newY}px`;
        }
    });
}
