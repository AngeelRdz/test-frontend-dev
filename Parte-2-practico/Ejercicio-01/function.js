document.getElementById('button-change-color').addEventListener('click', function() {
    let texto = document.getElementById('paragraph');
    
    if (texto.style.backgroundColor === 'lightblue') {
        texto.style.backgroundColor = '';
    } else {
        texto.style.backgroundColor = 'lightblue';
    }
});
