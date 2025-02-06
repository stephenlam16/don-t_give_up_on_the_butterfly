const messages = [
    "Are you sure?",
    "Really sure??",
    "Andrea please...",
    "Just think about it!",    
    "Look at how lonely the butterfly is.",
    "If you say no, the butterfly will be really sad...",
    "How could you do that to him...",
    "He will be very very very sad...",
    "Never thought you could do that to a butterfly...",
    "Just kidding, say yes please! ??????"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.4}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}