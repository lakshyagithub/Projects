function note() {
    window.alert("Note: Play different sounds like clap, spoon and cup, bell to make the aliens dance");
}
function startClassification() {
    navigator.mediaDevices.getUserMedia({   audio=true  });
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/AiQhG2JR0/model.json', modelReady);
}