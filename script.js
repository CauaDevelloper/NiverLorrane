document.getElementById('surpriseBtn').addEventListener('click', function () {
    var surprise = document.getElementById('surprise');
    surprise.classList.remove('hidden');
    setTimeout(function () {
        surprise.style.opacity = 1;
    }, 100);
});