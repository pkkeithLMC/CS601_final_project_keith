const navSection = document.querySelector('.nav');

navSection.innerHTML = buildNav();


const navBtn = document.querySelector('#nav-button');
const navDivision = document.querySelector('.nav-menu');



navBtn.addEventListener('click', () => {
    navDivision.classList.toggle('showNav');
    const icon = document.getElementById("nav-icon");
    if (icon.classList.contains('far') && icon.classList.contains('fa-plus-square')) {
        icon.classList.remove('fa-plus-square');
        icon.classList.add('fa-minus-square');
      } else if (icon.classList.contains('far') && icon.classList.contains('fa-minus-square')) {
        icon.classList.remove('fa-minus-square');
        icon.classList.add('fa-plus-square');
      }
});


function buildNav() {

    const pages = [
        {
            "name": "home",
            "href": "index.html"
        },
        {
            "name": "Resume",
            "href": "resume.html"
        },
        {
            "name": "Skills",
            "href": "skills.html"
        },
        {
            "name": "Teaching",
            "href": "teaching.html"
        },
        {
            "name": "Homestead",
            "href": "farm.html"
        },
        {
            "name": "Music",
            "href": "music.html"
        },
        {
            "name": "Contact",
            "href": "contact.html"
        }
    ]

    let nav = "";

    // Get the pathname of the current URL
    const currentPath = window.location.pathname;

    // Split the pathname using '/' as the delimiter
    const pathParts = currentPath.split('/');

    // Get the last part of the path which represents the filename
    var currentPage = pathParts[pathParts.length - 1];

    if( currentPage === '' || currentPage === '/'){
        currentPage = "index.html";
    }

    //console.log( 'current page = ' + currentPage);

    nav += `<div class="nav-display">
            <div class="nav-holder">`

    if( currentPage == 'index.html') {
        nav += ` <a href="index.html" class="nav-home">kevin</a>`
    }
    else {
        nav += `<a href="../index.html" class="nav-home">kevin</a>`
    }

    nav += `
        <button type="button" class="nav-button" id="nav-button">
            <i class = "far fa-plus-square" id="nav-icon"></i>
        </button>
        </div>


        <div class="nav-menu">
            <ul class="nav-ul">`
    
    for(  let page of pages)
    {
        let indexPath = "";
        let pagePath = "";
        if( currentPage == "index.html"){
            indexPath = "";
            pagePath = "./pages/";
        }
        else {
            indexPath = "../";
            pagePath = "";
        }

        //current page should be in different color
        //active-item class in CSS controls this color.
        if( page.href == currentPage){
            nav += '<li class="nav-li active-item">'
        }
        else{
            nav += '<li class="nav-li">'
        }

        if( page.href == "index.html"){
            nav += `<a href="${indexPath}index.html" class="nav-a">home</a>`;
        }
        else{
            nav += `<a href="${pagePath}${page.href}" class="nav-a">${page.name}</a>`;
        }
        nav += ' </li>';
    }
    nav += `</ul></div></div>`;
   

    return nav;
}

