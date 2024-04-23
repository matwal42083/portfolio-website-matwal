
//


// Dark Mode Light Mode functionality
// Declaring the Variables for Dark Mode, target the body and the toggle button
const body = document.querySelector('body');
const toggle = document.querySelector('#toggle-btn');


function disableDarkMode() {
  body.classList.add('light-mode');
  body.classList.remove('dark-mode');
  localStorage.setItem('lightMode', 'true');
  localStorage.setItem('darkMode','false');
  toggle.innerText = 'Light';
  toggle.classList.add('fa-sun');
  toggle.classList.remove('fa-moon');
}

function enableDarkMode() {
  body.classList.add('dark-mode');
  body.classList.remove('light-mode');
  localStorage.setItem('darkMode', 'true');
  localStorage.setItem('lightMode','false');
  toggle.innerText = 'Dark';
  toggle.classList.remove('fa-sun');
  toggle.classList.add('fa-moon');
}



function toggleMode() {
  const isDarkMode = body.classList.contains('dark-mode');
  const isLightMode = body.classList.contains('light-mode');
  if(isLightMode) {  
  enableDarkMode();
  }else if (isDarkMode) {
    disableDarkMode();
  }
}

// Initial setup based on local storage
const isLightMode = localStorage.getItem('lightMode');
const isDarkMode = localStorage.getItem('darkMode'); 
if (isLightMode === 'true') {
   disableDarkMode();
} else if (isDarkMode === 'true'){
  enableDarkMode();
}

// Event listener for the toggle button
toggle.addEventListener('click', toggleMode);
// On each page load
window.addEventListener('load', () => { 
  const isLightMode = localStorage.getItem('lightMode');
  const isDarkMode =  localStorage.getItem('darkMode'); // 
  if (isLightMode === 'true') { 
    disableDarkMode();       
  } else if (isDarkMode === 'true') {
    enableDarkMode(); 
  }
});                                                    









/*
const previousButton = document.querySelector(".left-arrow");
const nextButton = document.querySelector(".right-arrow");
const breadcrumbs = document.querySelector(".breadcrumbsDisplay");

// Initial state (assuming you start on the first page)
let currentPage = 1;
const maxPages = 4; // Adjust this based on your actual number of pages
const pages = [
    { text: 'Home', href: './index1.html' },
    { text: 'About', href: './index2.html' },
    { text: 'Portfolio', href: './index3.html' },
    { text: 'Contact', href: './index4.html' },
]
// Handle previous button click
previousButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updateBreadcrumbs();
    window.location.href = pages[currentPage-1].href;
  }
  previousButton.disabled = currentPage === 1;
});

// Handle next button click
nextButton.addEventListener("click", () => {
  if (currentPage < maxPages) {
    currentPage++;
    updateBreadcrumbs();
    window.location.href = pages[currentPage-1].href;
  }
  nextButton.disabled = currentPage === maxPages;
});

// Update breadcrumbs based on current page
function updateBreadcrumbs() {
  breadcrumbs.innerHTML = ""; // Clear existing breadcrumbs

  for (let i = 1; i <= maxPages; i++) { // Change this line
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    listItem.classList.add("breadcrumb-item");
    link.textContent = pages[i-1].text;
    link.href = pages[i-1].href;

    if (i === currentPage) {
      listItem.classList.add("active"); // Mark current page as active
      link.removeAttribute("href"); // Remove link for current page
    }

    listItem.appendChild(link);
    breadcrumbs.appendChild(listItem);
  }
}

// Initial setup
updateBreadcrumbs();
previousButton.disabled = currentPage === 1;
nextButton.disabled = currentPage === maxPages;

/*
const previousButton = document.querySelector(".left-arrow");
const nextButton = document.querySelector(".right-arrow");
const breadcrumbs = document.querySelector(".breadcrumbsDisplay");

// Initial state
let currentPage = 1;
const maxPages = 4; 
const pages = [
{ text: 'Home |', href: './index1.html' },
{ text: 'About |', href: './index2.html' },
{ text: 'Portfolio |', href: './index3.html' },
{ text: 'Contact |', href: './index4.html' }, 
]; // (Your pages array)

// ... (event listeners as before)

function updateBreadcrumbs() {
  // Remove existing breadcrumb links
  while (breadcrumbs.firstChild) {
    breadcrumbs.removeChild(breadcrumbs.firstChild);
  }

  for (let i = 1; i <= maxPages; i++) { 
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    listItem.classList.add("breadcrumb-item");

    link.textContent = pages[i - 1].text; // Access pages with i-1
    link.href = pages[i - 1].href;

    if (i === currentPage) {
      listItem.classList.add("active"); 
      link.removeAttribute("href");
    }

    listItem.appendChild(link);
    breadcrumbs.appendChild(listItem);
  }
}

// Initial setup 
updateBreadcrumbs();
previousButton.disabled = currentPage === 1;
nextButton.disabled = currentPage === maxPages; 
*/


