(() => { 
    // audio
    const Aplayer = document.getElementById("audio"),
        AplayPauseBtn = document.querySelector(".a-playpause"),
        AvolumeUp = document.querySelector(".a-volumeUp"),
        AvolumeDown = document.querySelector(".a-volumeDown");

    // Audio player code
    Aplayer.removeAttribute("controls");

    AplayPauseBtn.onclick = () => {
        if (Aplayer.paused) {
            Aplayer.play();
            AplayPauseBtn.textContent = "Pause";
        } else {
            Aplayer.pause();
            AplayPauseBtn.textContent = "Resume";
        }
    };
    AvolumeUp.onclick = () => {
        if (Aplayer.volume < 2) {
            Aplayer.volume += 0.2;
        } else {
            Aplayer.volume = 1;
        }
    }

    AvolumeDown.onclick = () => {
        if (Aplayer.volume < 2) {
            Aplayer.volume -= 0.2;
        } else {
            Aplayer.volume = 1;
        }
    }

})();