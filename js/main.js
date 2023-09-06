// выбираем все ссылки на якори на странице
const links = document.querySelectorAll('a[href^="#"]');

// добавляем обработчик клика на каждую ссылку
links.forEach(link => {
    link.addEventListener("click", function (event) {
        // отменяем действие ссылки по умолчанию
        event.preventDefault();

        // получаем идентификатор секции, к которой нужно прокрутить
        const sectionId = this.getAttribute("href");

        // выбираем секцию по идентификатору
        const section = document.querySelector(sectionId);

        // выполняем плавную прокрутку до нужной секции
        section.scrollIntoView({
            behavior: "smooth",
        });
    });
});
