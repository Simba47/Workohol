//this page includes 

// Get the navbar element
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

//scroll event listener 
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 50) {
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 2px 10px rgb(0, 0, 0)';
    } else {
        navbar.style.backgroundColor =  'white';
        navbar.style.boxShadow = 'none';
    }
    lastScrollTop = scrollTop;
});

// Search functionality
function searchProducts() {
    const searchQuery = document.getElementById('search-input').value;
    if (searchQuery) {
        alert(`Searching for: ${searchQuery}`);
        // You can redirect to a search results page or filter products dynamically here
    } else {
        alert('Please enter a search term.');
    }
}

// Cart functionality
document.addEventListener("DOMContentLoaded", function() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;

    function addToCart(product) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        document.getElementById("cart-count").innerText = cart.length;
        alert(product.name + " added to cart!");
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            let productElement = this.parentElement;
            let product = {
                name: productElement.getAttribute("data-name"),
                price: productElement.getAttribute("data-price"),
                img: productElement.getAttribute("data-img"),
                quantity: 1
            };
            addToCart(product);
        });
    });
});

// Dropdown functionality
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if clicked outside
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});