// Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.
let contents = document.getElementById("contents");
contents.onclick = function (event) {
    let target = event.target.closest("a");

    if (target && contents.contains(target)) {
        return handleLink(target.getAttribute("href"));
    }

    function handleLink(href) {
        let isLeaving = confirm(`Leave for ${href}?`);
        if (!isLeaving) return false;
    }
};

// Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.
let thumbs = document.getElementById("thumbs");
let largeImg = document.getElementById("largeImg");
thumbs.onclick = function (event) {
    let thumbnail = event.target.closest("a");
    console.log(thumbnail);

    if (!thumbnail) return;
    showThumbnail(thumbnail.href, thumbnail.title);
    event.preventDefault();
};

function showThumbnail(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
}
