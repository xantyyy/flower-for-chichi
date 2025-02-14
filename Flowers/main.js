onload = () => {
    // Smooth Page Load Effect
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    // Auto-Playing Background Music
    const audio = document.getElementById("bg-music");
    
    // Try to play music automatically
    let playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Autoplay blocked by browser, showing play button.");
            
            // Create a manual play button if autoplay is blocked
            let playButton = document.createElement("button");
            playButton.innerText = "Play Music";
            playButton.style.padding = "10px";
            playButton.style.marginTop = "20px";
            playButton.style.fontSize = "16px";
            playButton.style.cursor = "pointer";

            playButton.addEventListener("click", function() {
                audio.play();
                playButton.remove(); // Remove button after play
            });

            document.body.appendChild(playButton);
        });
    }
};
