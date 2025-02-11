script.js:
let count = 0;
document.getElementById("jap-btn").addEventListener("click", function() {
    count++;
    document.getElementById("count").innerText = count;
    document.getElementById("jap-text").innerHTML += "??? ";
    if (count % 108 === 0) {
        document.getElementById("jap-text").innerHTML += "<br>";
    }
});

document.getElementById("play-pause").addEventListener("click", function() {
    let audio = document.getElementById("chant-audio");
    if (audio.paused) {
        audio.play();
        this.innerText = "Stop Chant";
    } else {
        audio.pause();
        this.innerText = "Play Chant";
    }
});



