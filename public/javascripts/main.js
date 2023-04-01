(() => {

    // Video player code
    const Vplayer = document.querySelector("video"),
        VplayPauseBtn = document.querySelector(".v-playpause"),
        VvolumeUp = document.querySelector(".v-volumeUp"),
        VvolumeDown = document.querySelector(".v-volumeDown");



    Vplayer.removeAttribute("controls");

    VplayPauseBtn.onclick = () => {
        if (Vplayer.paused) {
            Vplayer.play();
            VplayPauseBtn.textContent = "Pause (p)";
        } else {
            Vplayer.pause();
            VplayPauseBtn.textContent = "Resume (p)";
        }
    };

    VvolumeUp.onclick = () => {
        if (Vplayer.volume < 0.9) {
            Vplayer.volume += 0.1;
        } else {
            Vplayer.volume = 1;
        }
    }

    VvolumeDown.onclick = () => {
        if (Vplayer.volume > 0) {
            Vplayer.volume -= 0.1;
        }
    }


})();


