const sentences = [
    
    "Your presence fills each moment with warmth and light.",
    "In a world full of wonders, you're one of the brightest.",
    "Life blossoms with every smile you share.",
    "Your existence adds color to the canvas of our lives.",
    "With you, every day feels like a gift.",
    "Your laughter is the melody that makes life's symphony complete.",
    "The world is a better place because you're in it.",
    "Your kindness radiates like sunshine on a cloudy day.",
    "You are cherished more than words could ever express.",
    "In a million ways, you make the world a better, brighter place, just by being you.",
    "I'm proud of you",
    ];
    
    function flashSentence() {
        const randomIndex = Math.floor(Math.random() * sentences.length);
        const sentenceElement = document.getElementById("sentence");
        sentenceElement.innerHTML = sentences[randomIndex];
        sentenceElement.classList.add("show"); 
        setTimeout(() => {
            sentenceElement.classList.remove("show"); 
        }, 3000);
    }
    
    
    setInterval(flashSentence, 4000);
    
    window.addEventListener('load', function() {
        flashSentence();
    });
    
    
    