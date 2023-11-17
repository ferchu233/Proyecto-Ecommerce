function fillUpdateForm(button) {

    const row = button.closest('tr');

    const productName = row.querySelector('td:nth-child(2)').innerText;
    const productPrice = row.querySelector('td:nth-child(3)').innerText;
    const productStock = row.querySelector('td:nth-child(4)').innerText;

    document.getElementById('updateProductName').value = productName;
    document.getElementById('updateProductPrice').value = productPrice;
    document.getElementById('updateProductStock').value = productStock;

    updatePopup.classList.add('fade-in');
    updateOverlay.classList.add('fade-in');
    updatePopup.style.display = 'block';
    updateOverlay.style.display = 'block';
}



function scrollDiv() {
    var div = document.getElementById('chart-container');
    div.scrollLeft = div.scrollWidth;
}

const addButton = document.querySelector('.boton-add button');
const updateButtons = document.querySelectorAll('.update-btn');
const addPopup = document.querySelector('.add-popup');
const updatePopup = document.querySelector('.update-popup');
const addOverlay = document.querySelector('.add-overlay');
const updateOverlay = document.querySelector('.update-overlay');
const closeButton = document.querySelectorAll('.popup .close-button');

addButton.addEventListener('click', () => {
    addPopup.classList.add('fade-in');
    addOverlay.classList.add('fade-in');
    addPopup.style.display = 'block';
    addOverlay.style.display = 'block';
});

updateButtons.forEach(button => {
    button.addEventListener('click', () => {
        updatePopup.classList.add('fade-in');
        updateOverlay.classList.add('fade-in');
        updatePopup.style.display = 'block';
        updateOverlay.style.display = 'block';
    });
});

closeButton.forEach(button => {
    button.addEventListener('click', () => {
        addPopup.classList.remove('fade-in');
        updatePopup.classList.remove('fade-in');
        addOverlay.classList.remove('fade-in');
        updateOverlay.classList.remove('fade-in');
        addPopup.classList.add('fade-out');
        updatePopup.classList.add('fade-out');
        addOverlay.classList.add('fade-out');
        updateOverlay.classList.add('fade-out');
        setTimeout(() => {
            addPopup.style.display = 'none';
            updatePopup.style.display = 'none';
            addOverlay.style.display = 'none';
            updateOverlay.style.display = 'none';
            addPopup.classList.remove('fade-out');
            updatePopup.classList.remove('fade-out');
            addOverlay.classList.remove('fade-out');
            updateOverlay.classList.remove('fade-out');
        }, 300);
    });
});