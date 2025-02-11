document.addEventListener("DOMContentLoaded", function() {
    let chantCount = 0;
    const chantButton = document.getElementById("chantButton");
    const chantDisplay = document.getElementById("chantCount");
    const playChant = document.getElementById("playChant");
    const chantText = document.getElementById("chantText");

    chantButton.addEventListener("click", function() {
        chantCount++;
        chantDisplay.textContent = chantCount;
    });

    playChant.addEventListener("click", function() {
        const chant = chantText.value.trim();
        if (chant) {
            const utterance = new SpeechSynthesisUtterance(chant);
            speechSynthesis.speak(utterance);
        } else {
            alert("Please enter a chant first.");
        }
    });
});

