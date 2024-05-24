document.getElementById('downloadButton').addEventListener('click', function() {
    console.log('Descargando CV');
    const cv = document.querySelector('body');
    html2pdf(cv, {
        filename: 'CV_Jose_Angel_Rdz.pdf',
        font: {
            size: 12
        },
    });
});
