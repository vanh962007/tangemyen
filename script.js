const messages = [
   "Chị Chắc Chưa?",
    "Chị Chắc Chắn Chưa??",
    "Chị Có Chắc Chắn Chưa?",
    "100% Chưa?.",
    "Chị Nghĩ Kĩ Lại Đi",
    "Chị Từ Chối Em Sẽ Rất Buồn Đó",
    "Em Sẽ Đau Lòng Lắm",
    "Em Sẽ Rất Rất Rất Buồn Đó",
    "Được Rồi Em Sẽ Ngừng Nói",
    "Em Đùa Thôi , Chị Đồng Ý Đi Mà! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}