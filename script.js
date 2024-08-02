
document.getElementById('yesButton').addEventListener('click', function() {
    const animationContainer = document.getElementById('animationContainer');
    animationContainer.innerHTML = '<div class="balloons">🎈🎈🎈🎉🎉🎉🌸🌸🌸</div>';
    animationContainer.style.visibility = 'visible';
});

document.getElementById('noButton').addEventListener('click', function() {
    const animationContainer = document.getElementById('animationContainer');
    animationContainer.innerHTML = '<div class="sad-face">😢</div>';
    animationContainer.style.visibility = 'visible';
});
