if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
        .then(registration => { console.log('Service Worker registered with scope:', registration.scope); })
        .catch(error => { console.log('Service Worker registration failed:', error); });
}

function handleSubmit(event) {
    event.preventDefault();

    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const num3 = document.getElementById('num3').value;

    console.log('Number 1:', num1);
    console.log('Number 2:', num2);
    console.log('Number 3:', num3);

    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('num3').value = '';
}

function showScreen(screenNumber) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    const selectedScreen = document.getElementById('screen' + screenNumber);
    selectedScreen.classList.add('active');
}

document.getElementById('form1').addEventListener('submit', handleSubmit);
document.getElementById('button1').addEventListener('click', _ => showScreen(1));
document.getElementById('button2').addEventListener('click', _ => showScreen(2));
