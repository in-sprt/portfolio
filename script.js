// Плавный скролл при клике на ссылки в меню jr
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

lightbox.option({
    'resizeDuration': 200,  //  Время  анимации  изменения  размера  (мс)
    'wrapAround': true,  //  Зацикливание  галереи
    'albumLabel': "%1 из %2",  //  Формат  метки  "Номер  изображения  из  общего  количества"
    //  ...  другие  опции
}); 
