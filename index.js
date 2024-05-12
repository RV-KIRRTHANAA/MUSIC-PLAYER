var currentAudio = null;

function playSound(soundFile, element){
    if(currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }

    var audio = new Audio(soundFile);
    audio.play();
    currentAudio = audio;
}