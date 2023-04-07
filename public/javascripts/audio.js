document.addEventListener('DOMContentLoaded', () => {
    // audio
    const Aplayer = document.getElementById("audio"),
        AplayPauseBtn = document.querySelector(".a-playpause"),
        AvolumeUp = document.querySelector(".a-volumeUp"),
        AvolumeDown = document.querySelector(".a-volumeDown"),
        Acaption = document.querySelector(".caption");
  
    // Audio player code
    Aplayer.removeAttribute("controls");
    
    // Add event listener to the track to display captions
    Aplayer.addEventListener('timeupdate', () => {
        let cue = Aplayer.textTracks[0].activeCues[0];
        if (cue) {
            Acaption.textContent = cue.text;
        }
    });
  
    AplayPauseBtn.onclick = () => {
        if (Aplayer.paused) {
            Aplayer.play();
            AplayPauseBtn.textContent = "Pause audio (alt + a)";
        } else {
            Aplayer.pause();
            AplayPauseBtn.textContent = "Resume audio (alt + a)";
        }
    };
    AvolumeUp.onclick = () => {
        if (Aplayer.volume <  0.9) {
            Aplayer.volume += 0.1;
        } else {
            Aplayer.volume = 1;
        }
    }
  
    AvolumeDown.onclick = () => {
        if (Aplayer.volume > 0) {
            Aplayer.volume -= 0.1;
        }
    }
  
    function CaptionControl() {
        let captionButton = document.querySelector(".caption_button");
        if (Aplayer.textTracks[0].mode == "showing") {
            Aplayer.textTracks[0].mode = "hidden";
            captionButton.textContent = "Show captions (alt + c)";
            Acaption.style.display = "none";
        } else {
            Aplayer.textTracks[0].mode = "showing";
            captionButton.textContent = "Hide captions (alt + c)";
            Acaption.style.display = "block";
        }
    }
  });
  
// document.addEventListener('DOMContentLoaded', () => {
//     // audio
//     const Aplayer = document.getElementById("audio"),
//         AplayPauseBtn = document.querySelector(".a-playpause"),
//         AvolumeUp = document.querySelector(".a-volumeUp"),
//         AvolumeDown = document.querySelector(".a-volumeDown");

//     // Audio player code
//     Aplayer.removeAttribute("controls");

//     // event listener to the track to display captions
//   Aplayer.addEventListener('timeupdate', () => {
//     let cue = Aplayer.textTracks[0].activeCues[0];
//     if (cue) {
//         Acaption.textContent = cue.text;
//     }
// });

//     AplayPauseBtn.onclick = () => {
//         if (Aplayer.paused) {
//             Aplayer.play();
//             AplayPauseBtn.textContent = "Pause audio (alt + a)";
//         } else {
//             Aplayer.pause();
//             AplayPauseBtn.textContent = "Resume audio (alt + a)";
//         }
//     };
//     AvolumeUp.onclick = () => {
//         if (Aplayer.volume <  0.9) {
//             Aplayer.volume += 0.1;
//         } else {
//             Aplayer.volume = 1;
//         }
//     }

//     AvolumeDown.onclick = () => {
//         if (Aplayer.volume > 0) {
//             Aplayer.volume -= 0.1;
//         }
//     }
//   });
  