const soundMap = {
    'W': 'crash.mp3',
    'A': 'kick-bass.mp3',
    'S': 'snare.mp3',
    'D': 'tom-1.mp3',
    'J': 'tom-2.mp3',
    'K': 'tom-3.mp3',
    'L': 'tom-4.mp3'
};

document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase();
    if (soundMap[key]) {
        playSound(soundMap[key]);
        addPlayingClass(key);
    }
});

document.querySelectorAll('.key').forEach(function(keyElement) {
    keyElement.addEventListener('click', function() {
        const key = keyElement.getAttribute('data-key');
        if (soundMap[key]) {
            playSound(soundMap[key]);
            addPlayingClass(key);
        }
    });
});


function playSound(soundFile) {
    const audio = new Audio(`sounds/${soundFile}`);
    audio.play();
}

function addPlayingClass(key) {
    const keyElement = document.querySelector(`.key[data-key="${key}"]`);
    if (keyElement) {
        keyElement.classList.add('playing');
        setTimeout(() => keyElement.classList.remove('playing'), 100); 
    }
}
