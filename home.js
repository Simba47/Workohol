// this page Fetches
// navbar, promo banner,categories, and other sections

// Load Navbar
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
    });
// Load promo banner
fetch('promo banner.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('promo banner-placeholder').innerHTML = data;
    });
//load section1
fetch('section1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('section1-placeholder').innerHTML = data;
    });
//load categories
    fetch('categories.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('categories-placeholder').innerHTML = data;
    });
//load section2
fetch('section2.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('section2-placeholder').innerHTML = data;
    });


