let header = document.querySelector('header');
let footer = document.querySelector('footer');
let href = document.location.pathname;
let currentPage = document.title;
let deep = 0;
let html = href.includes('.html'), langEn = href.includes('-en'), isIndex = href.includes('index'),
    lengthPath = href.length, haveHashtag = href.includes('#');

function hrefLangUA() {
    let hrefUa = document.location.pathname
    if (langEn) {
        if (html) {
            let placeHtml = hrefUa.indexOf('-en.html');
            hrefUa = hrefUa.slice(0, placeHtml);
            hrefUa = hrefUa.concat('.html');
        } else {
            let placeHtml = hrefUa.indexOf('-en');
            hrefUa = hrefUa.slice(0, placeHtml);
            hrefUa = hrefUa.concat('.html');
        }
    }
    return hrefUa;
}

function hrefLangEN() {
    let hrefEn = document.location.pathname;
    if (!langEn) {
        if (haveHashtag) {
            if (html) {
                let placeHtml = hrefEn.indexOf('.html');
                hrefEn = hrefEn.slice(0, placeHtml);
                hrefEn = hrefEn.concat('-en.html');
            } else {
                if (lengthPath == 1) {
                    let placeHtml = hrefEn.indexOf('#');
                    hrefEn = hrefEn.slice(0, placeHtml);
                    hrefEn = hrefEn.concat('index-en.html');
                } else {
                    let placeHtml = hrefEn.indexOf('#');
                    hrefEn = hrefEn.slice(0, placeHtml);
                    hrefEn = hrefEn.concat('-en.html');
                }
            }
        } else {
            if (html) {
                let placeHtml = hrefEn.indexOf('.html');
                hrefEn = hrefEn.slice(0, placeHtml);
                hrefEn = hrefEn.concat('-en.html');
            } else {
                if (lengthPath == 1) {
                    hrefEn = hrefEn.concat('index-en.html');
                } else {
                    hrefEn = hrefEn.concat('-en.html');
                }
            }
        }
    }
    return hrefEn;
}

function drawHeader(currentPage, deep) {
    let headerBtn = "надіслати повідомлення", langSelect = "UA", langSelectMobUa = `class="lang-select"`, langSelectMobEn = "";
    if (langEn) {
        headerBtn = "Send message", langSelect = "EN", langSelectMobUa = "", langSelectMobEn = `class="lang-select"`;
    }

    function drawMenu() {
        let navMenu = "";
        if (langEn) {
            switch (deep) {
                case 0: {
                    if (currentPage != 'Home page') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="index-en.html">Home</a></li>`;
                    if (currentPage != 'My portfolio') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="portfolio-en.html">My portfolio</a></li>`;
                    if (currentPage != 'About me') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="about-en.html">About me</a></li>`;
                    if (currentPage != 'My skills') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="skills-en.html">My skills</a></li>`;
                    if (currentPage != 'My contacts') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="contacts-en.html">My contacts</a></li>`;
                } break;
                case 1: {
                    if (currentPage != 'Home page') navMenu += `<li class="nav-item"><a class="nav-link menu-link" ../>href="index-en.html">Home</a></li>`;
                    if (currentPage != 'My portfolio') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../portfolio-en.html">My portfolio</a></li>`;
                    if (currentPage != 'About me') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../about-en.html">About me</a></li>`;
                    if (currentPage != 'My skills') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../skills-en.html">My skills</a></li>`;
                    if (currentPage != 'My contacts') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../contacts-en.html">My contacts</a></li>`;

                } break;
                case 2: {
                    if (currentPage != 'Home page') navMenu += `<li class="nav-item"><a class="nav-link menu-link"../../>href="index-en.html">Home</a></li>`;
                    if (currentPage != 'My portfolio') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../../portfolio-en.html">My portfolio</a></li>`;
                    if (currentPage != 'About me') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../../about-en.html">About me</a></li>`;
                    if (currentPage != 'My skills') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../../skills-en.html">My skills</a></li>`;
                    if (currentPage != 'My contacts') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../../contacts-en.html">My contacts</a></li>`;
                }
            }
        } else {
            switch (deep) {
                case 0: {
                    if (currentPage != 'Головна') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="index.html">Головна</a></li>`;
                    if (currentPage != 'Моє портфоліо') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="portfolio.html">Моє портфоліо</a></li>`;
                    if (currentPage != 'Про мене') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="about.html">Про мене</a></li>`;
                    if (currentPage != 'Мої навички') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="skills.html">Мої навички</a></li>`;
                    if (currentPage != 'Мої контакти') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="contacts.html">Мої контакти</a></li>`;
                } break;
                case 1: {
                    if (currentPage != 'Home page') navMenu += `<li class="nav-item"><a class="nav-link menu-link" ../>href="index.html">Home</a></li>`;
                    if (currentPage != 'My portfolio') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../portfolio.html">My portfolio</a></li>`;
                    if (currentPage != 'About me') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../about.html">About me</a></li>`;
                    if (currentPage != 'My skills') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../skills.html">My skills</a></li>`;
                    if (currentPage != 'My contacts') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../contacts.html">My contacts</a></li>`;

                } break;
                case 2: {
                    if (currentPage != 'Home page') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../../index.html">Home</a></li>`;
                    if (currentPage != 'My portfolio') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../../portfolio.html">My portfolio</a></li>`;
                    if (currentPage != 'About me') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../../about.html">About me</a></li>`;
                    if (currentPage != 'My skills') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../../skills.html">My skills</a></li>`;
                    if (currentPage != 'My contacts') navMenu += `<li class="nav-item"><a class="nav-link menu-link" href="../../contacts.html">My contacts</a></li>`;
                }
            }
        }

        return navMenu;
    }
    let logo = '';
    switch (deep) {
        case 0: logo = '<img src="img/logo-transparent.png" alt="logo" class="header-logo">';
            break;
        case 1: logo = '<img src="../img/logo-transparent.png" alt="logo" class="header-logo">'
            break;
        case 2: logo = '<img src="../../img/logo-transparent.png" alt="logo" class="header-logo">'
    }

    header.innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary menu"> 
    <div class="container-fluid header-menu">
    <a href="index.html" title="logo">
            ${logo}
        </a>
        <div class="mob-lang-select" >
            <a ${langSelectMobUa} href="${hrefLangUA()}">UA</a>
            <div class="vertical"></div>
            <a ${langSelectMobEn} href="${hrefLangEN()}">EN</a>
        </div>
        <div class="header-burger navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation"><span></span></div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu-list">
                <div></div>
                ${drawMenu()}
                <li class="nav-item dropdown" id="navlang">
                    <span class="nav-link dropdown-toggle menu-link" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">${langSelect}</span>
                    <ul class="dropdown-menu lang">
                        <li><a class="dropdown-item lang" href="${hrefLangUA()}">UA</a></li>
                        <li><a class="dropdown-item lang" href="${hrefLangEN()}">EN</a></li>
                    </ul>
                </li>
            </ul>
            <div class="flash-btn">
                <div class="menu-flash"></div>
                <button class="header-btn popup-link" href="#popup">${headerBtn}</button>
            </div>
            <div class="header-icon-social">
                <a href="https://www.facebook.com/alexandr.meleshko.9" class="social-link icon" title="facebook"
                    target="_blank">
                    <svg svg="" class="icon">
                        <use xlink:href="img/sprite.svg#facebook"></use>
                    </svg>
                </a>
                <a href="https://www.instagram.com/sasha_iraq/" class="social-link icon" title="instagram"
                    target="_blank">
                    <svg class="icon">
                        <use xlink:href="img/sprite.svg#instagram"></use>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</nav>`
}

function drawFooter(currentPage) {
    let footerInc;
    if (langEn) {
        footerInc = "Developer Alexander Meleshko, Inc. All rights reserved."
    } else {
        footerInc = "Розробник Олександр Мелешко. Всі права захищено."
    }
    footer.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="facebook" viewBox="0 0 16 16" fill='currentColor'>
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
        </symbol>
        <symbol id="instagram" viewBox="0 0 16 16" fill='currentColor'>
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
        </symbol>
        <symbol id="twitter" viewBox="0 0 16 16" fill='currentColor'>
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
        </symbol>
        <symbol id="linkedin" viewBox="0 0 16 16" fill='currentColor'>
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
        </symbol>
        <symbol id="github" viewBox="0 0 16 16" fill='currentColor'>
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
        </symbol>
    </svg>
    <div class="container-fluid">
        <div class="container">
            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>© 2023 ${footerInc}</p>
                <ul class="list-unstyled d-flex">
                    <li class="ms-3"><a class="link-body-emphasis" href="https://www.facebook.com/alexandr.meleshko.9" target="blank"><svg class="bi socialicon" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
                    <li class="ms-3"><a class="link-body-emphasis" href="https://twitter.com/AleksandrMel83" target="blank"><svg class="bi socialicon" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
                    <li class="ms-3"><a class="link-body-emphasis" href="https://www.instagram.com/sasha_iraq/" target="blank"><svg class="bi socialicon" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
                    <li class="ms-3"><a class="link-body-emphasis" href="https://github.com/AlexMel83" target="blank"><svg class="bi socialicon" width="24" height="24"><use xlink:href="#github"></use></svg></a></li>
                    <li class="ms-3"><a class="link-body-emphasis" href="https://www.linkedin.com/in/alexmel83" target="blank"><svg class="bi socialicon" width="24" height="24"><use xlink:href="#linkedin"></use></svg></a></li>
                </ul>
            </div>
        </div>
    </div>`;
}

if (currentPage == 'Make table' || currentPage == 'JS-Calculator' || currentPage == 'Editable table' ||
    currentPage == 'Editable sort table' || currentPage == 'Script for open popup windows' ||
    currentPage == 'JS Stack TaskList' || currentPage == 'JS ToDoList' || currentPage == 'JavaScript Tic-Tac-Toe') deep = 1;
if (currentPage == 'Maket' || currentPage == 'Second individual project' || currentPage == 'JS Game Snake') deep = 2;

drawHeader(currentPage, deep);
drawFooter(currentPage);

let unlock = true;
let menuClose = true;
const timeout = 800;
/* this code added toggleClass to btn for work burger-menu and block scrolling*/
$(".header-burger").click(function () {
    $(".header-burger, .header-menu, .header-logo, .mob-lang-select").toggleClass("active");
});

$("#navbarSupportedContent").on("hidden.bs.collapse", function () {
    $("body").removeClass("no_scrolling");
});
$("#navbarSupportedContent").on("show.bs.collapse", function () {
    $("body").addClass("no_scrolling");
});
$(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
});
$(".dropdown-menu>li>a, .nav-item>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
    $(".container-fluid").removeClass("active");
    $(".header-burger, .header-menu, .header-logo, .mob-lang-select").removeClass("active");
});