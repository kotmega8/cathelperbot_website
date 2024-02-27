function navigate(page) {
    switch (page) {
        case 'home':
            window.location.href = 'index.html';
            break;
        case 'commands':
            window.location.href = 'commands.html';
            break;
        case 'premium':
            window.location.href = 'premium.html'; // Предположим, что у вас есть страница для раздела "Премиум"
            break;
        default:
            // По умолчанию переходим на главную
            window.location.href = 'index.html';
    }
}