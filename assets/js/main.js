// Выпадающее меню для "Product"
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Выпадающее меню для "Developers"
function myFunction1() {
    document.getElementById("myDropdown-1").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn-1')) {
        var dropdowns = document.getElementsByClassName("dropdown-content-1");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Выпадающее меню для "Deploy"
function myFunction3() {
    const dropdown = document.getElementById("myDropdown_3");
    dropdown.classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.closest('.menu-btn')) {
        const dropdowns = document.getElementsByClassName("dropdown_content_3");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// Аккордеон
document.addEventListener("DOMContentLoaded", function () {
    const accardions = document.querySelectorAll(".accardion");

    accardions.forEach(accardion => {
        const header = accardion.querySelector(".accardion-header");
        const content = accardion.querySelector(".accardion-content");

        header.addEventListener("click", () => {
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});

// Слайдер
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function switchSlides() {
        slides[currentIndex].classList.remove('active');

        currentIndex++;

        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        slides[currentIndex].classList.add('active');
    }

    setInterval(switchSlides, 3000);
});


// Вкладки
let btns = document.querySelectorAll('.action-btn');

let texts = document.querySelectorAll('.right-panel .section-title, .right-panel .info-text, .left-panel .tab-image');

btns.forEach((btn, index) => {
    btn.onclick = () => {
        document.querySelector('.action-btn.active').classList.remove('active');
        btn.classList.add('active');

        let imageSrc = btn.getAttribute('data-image');
        let title = btn.getAttribute('data-title');
        let text = btn.getAttribute('data-text');

        document.querySelector('.left-panel .tab-image').src = imageSrc;
        document.querySelector('.right-panel .section-title').innerHTML = title;
        document.querySelector('.right-panel .info-text').innerHTML = text;
    };
});

document.querySelector('.action-btn').classList.add('active');