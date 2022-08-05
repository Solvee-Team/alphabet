const lettersArray = [
  "Ա", "Բ", "Գ", "Դ", "Ե", "Զ", "Է", "Ը", "Թ", "Ժ", "Ի", "Լ", "Խ",
  "Ծ", "Կ", "Հ", "Ձ", "Ղ", "Ճ", "Մ", "Յ", "Ն", "Շ", "Ո", "Չ", "Պ",
  "Ջ", "Ռ", "Ս", "Վ", "Տ", "Ր", "Ց", "ՈՒ", "Փ", "Ք", "ԵՎ", "Օ", "Ֆ"
];

const displayLetter = letter => {
  const letterTextNode = document.createTextNode(letter);
  const letterDiv = document.createElement("div");
  letterDiv.appendChild(letterTextNode);
  letterDiv.setAttribute("class", "letterDiv");
  document.getElementById("allLettersDiv").appendChild(letterDiv);
}

const loadLetters = () => {
  lettersArray.map(letter => displayLetter(letter));
}

window.onload = () => {
  loadLetters();
}
