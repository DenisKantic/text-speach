let text = document.getElementById("txt");

let submitBtn = document.getElementById("submit");
let audioMessage;

submitBtn.addEventListener("click", () => {
  //set the text
  audioMessage.text = text.value;
  //speak the text
  window.speechSynthesis.speak(audioMessage);
});


window.onload = () => {
  if ("speechSynhesis" in window) {
    audioMessage = new SpeechSynthesisUtterance();
  } else {
    alert("Speech Synthese is not supported");
  }
};