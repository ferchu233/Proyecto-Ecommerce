$('.button').click(function () {
    var buttonId = $(this).attr('id');
    $('#update-user').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
});

$('.button').click(function () {
    var buttonId = $(this).attr('id');
    $('#update-user').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
});

$('.container-update-user').click(function (event) {
    if (event.target.className === 'container-update-user') {
        closeAndResetModal();
    }
});

$('.cerrar').click(function () {
    closeAndResetModal();
});

function closeAndResetModal() {
    $('#update-user').addClass('out');
    $('body').removeClass('modal-active');
}


var botonesMostrar = document.querySelectorAll('.articuloButton');

botonesMostrar.forEach(function (boton) {
    boton.addEventListener('click', function () {

        var divPadre = boton.parentNode;

        var elementosHijos = divPadre.children;
        var imagen = elementosHijos[0].getAttribute("src");
        var nombre = elementosHijos[1].textContent;
        var precio = elementosHijos[2].textContent;
        var Descripcion = elementosHijos[3].textContent;

        loadProduct(imagen, nombre, precio, Descripcion);
    });
});

function loadProduct(img, name, price, desc) {
    var imagenP = document.getElementById('imgProduct');
    var nameP = document.getElementById('nameProduct');
    var PriceP = document.getElementById('priceProduct');
    var descP = document.getElementById('desProduct');

    imagenP.src = img;
    nameP.textContent = name;
    PriceP.textContent = price;
    descP.textContent = desc + desc + desc;
}

document.addEventListener("DOMContentLoaded", function () {
    const expandButtons = document.querySelectorAll(".expand-button");

    expandButtons.forEach(button => {
        button.addEventListener("click", function () {
            const details = this.nextElementSibling;
            details.classList.toggle("active");
        });
    });
});


const imageGallery = document.querySelector('.image-gallery');
const images = imageGallery.querySelectorAll('img');
const imageCount = images.length;

document.documentElement.style.setProperty('--image-count', imageCount - 1);
document.documentElement.style.setProperty('--animation-duration', imageCount * 4 + 's');

images.forEach((img) => {
    const clone = img.cloneNode(true);
    imageGallery.appendChild(clone);
});


document.addEventListener("DOMContentLoaded", function () {
    const infoUser = document.querySelectorAll(".open-info");
    const cardUser = document.querySelectorAll(".open-card");
    const sectionFlout01 = document.getElementById("flout-section-info");
    const sectionFlout02 = document.getElementById("flout-section-card");
    const clouseinfo = sectionFlout01.querySelector(".clouse-flout-info");
    const clousecard = sectionFlout02.querySelector(".clouse-flout-card");
    const viweProduct = document.querySelectorAll(".articuloButton");
    const sectionFlout = document.getElementById("flout-section-product");
    const clouseProduct = sectionFlout.querySelector(".clouse-flout-product");

    viweProduct.forEach(btn => {
        btn.addEventListener("click", function () {
            sectionFlout.classList.toggle("mostrar");
            cancelScroll()
        });
    });

    clouseProduct.addEventListener("click", function () {
        sectionFlout.classList.remove("mostrar");
        restoreScroll()
    });

    infoUser.forEach(btn => {
        btn.addEventListener("click", function () {
            sectionFlout01.classList.toggle("mostrar");
            menuItems.classList.toggle('show');
            cancelScroll()
        });
    });

    clouseinfo.addEventListener("click", function () {
        sectionFlout01.classList.remove("mostrar");
        restoreScroll()
    });

    cardUser.forEach(btn => {
        btn.addEventListener("click", function () {
            sectionFlout02.classList.toggle("mostrar");
            menuItems.classList.toggle('show');
            cancelScroll()
        });
    });

    clousecard.addEventListener("click", function () {
        sectionFlout02.classList.remove("mostrar");
        restoreScroll()
    });


});

function cancelScroll() {
    document.documentElement.style.overflow = "hidden";
}

function restoreScroll() {
    document.documentElement.style.overflow = "auto";
}



const menuButton = document.getElementById('menuButton');
const menuItems = document.getElementById('menuItems');

menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('show');
});

const articules = document.querySelectorAll('articule');
const articulesPerPage = 9;
const numPages = Math.ceil(articules.length / articulesPerPage);

for (let i = 0; i < articules.length; i++) {
    if (i < articulesPerPage) {
        articules[i].style.display = 'block';
    }

    articules[i].classList.add('page' + Math.ceil((i + 1) / articulesPerPage));
}

function showPage(pageNumber) {
    for (let i = 0; i < articules.length; i++) {
        articules[i].style.display = 'none';
        scrollToTop();
    }

    const pageClass = '.page' + pageNumber;
    const pagearticules = document.querySelectorAll(pageClass);

    for (let i = 0; i < pagearticules.length; i++) {
        pagearticules[i].style.display = 'block';
    }
}

const pagination = document.querySelector('.pagination');

for (let i = 1; i <= numPages; i++) {
    const link = document.createElement('a');
    link.textContent = i;
    link.href = '#';
    link.addEventListener('click', (event) => {
        event.preventDefault();
        showPage(i);
    });
    pagination.appendChild(link);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.body.appendChild(pagination);

function previewImage(event) {
    const fotoPerfil = document.getElementById("FotoPerfil");
    fotoPerfil.src = URL.createObjectURL(event.target.files[0]);
}