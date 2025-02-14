const messages = [
   "Em Yến Chắc Chưa?",
    "Em Yến Chắc Chắn Chưa??",
    "Hỏi Lại Lần Nữa Là Chắc Chắn Chưa?",
    "100% Chưa?.",
    "Em Yến Nghĩ Kĩ Lại Đi",
    "Em Yến Từ Chối Tôi Sẽ Rất Buồn Đó",
    "Tôi Sẽ Đau Lòng Lắm",
    "Tôi Sẽ Rất Rất Rất Buồn Đó",
    "Được Rồi Tôi Sẽ Ngừng Nói",
    "Tôi Đùa Thôi , Em Yến Đồng Ý Đi Mà! ❤️"
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
