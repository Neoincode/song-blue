const audio = document.getElementById('audio');
const lyrics = document.getElementById('lyrics');
const lines = lyrics.querySelectorAll('p');

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    let activeLine = null;

    lines.forEach(line => {
        const lineTime = parseFloat(line.getAttribute('data-time'));
        line.classList.remove('highlight');
        if (lineTime <= currentTime) {
            activeLine = line;
        }
    });

    if (activeLine) {
        activeLine.classList.add('highlight');
        activeLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});
