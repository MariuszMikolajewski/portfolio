// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Dodaj interaktywność do swojej strony tutaj
    console.log('Strona załadowana poprawnie.');
    
    // Przykładowa funkcja, która zmienia kolor nagłówka po kliknięciu
    document.querySelector('h1').addEventListener('click', function() {
        this.style.color = this.style.color === 'red' ? 'white' : 'red';
    });
});
