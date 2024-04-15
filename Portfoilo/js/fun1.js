

const body = document.querySelector('body');
const toggle = document.querySelector('#toggle-btn');

function enableDarkMode() {
  body.classList.add('dark-mode');
  localStorage.setItem('darkMode', 'true');
}

function disableDarkMode() {
  body.classList.remove('dark-mode');
  localStorage.setItem('darkMode', 'false');
}

function toggleMode() {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');

  toggle.innerText = isDarkMode ? 'Dark' : 'Light';
  toggle.classList.toggle('fa-moon');
  toggle.classList.toggle('fa-sun');
}

// Initial setup based on local storage
const isDarkMode = localStorage.getItem('darkMode');
if (isDarkMode === 'true') {
  enableDarkMode(); 
}

// Event listener for the toggle button
toggle.addEventListener('click', toggleMode);
// On each page load
window.addEventListener('load', () => { 
    const isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode === 'true') {
        enableDarkMode(); 
    }


});















/*
// Get references to the body and toggle elements
const body = document.querySelector('body');
const toggle = document.querySelector('#toggle-btn');

// Define the functions to enable and disable dark mode
function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
    toggle.innerText = 'Dark';
    // Add any other style changes for dark mode here...
}

function enableLightMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
    toggle.innerText = 'Light';
    // Add any other style changes for light mode here...
}

// Define the function to toggle between dark mode and light mode
function toggleMode() {
   
    const isDarkMode = body.classList.contains('dark-mode');
    if (isDarkMode) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
}

// Add an event listener to the toggle element
toggle.addEventListener('click', toggleMode);

// Check if user preference is stored in localStorage
const isDarkMode = localStorage.getItem('darkMode');

// Set initial mode based on user preference
isDarkMode === 'true' ? enableDarkMode() : enableLightMode();





function toggleMode() {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    toggle.innerText = isDarkMode ? 'Light' : 'Dark';

    // Change nav links text color
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.style.color = isDarkMode ? 'white' : 'black';
    });

    // Change nav links, <i> icons and <a> tags text color
    const elementsToChange = document.querySelectorAll('.nav a, i, a');
    elementsToChange.forEach(element => {
        element.style.color = isDarkMode ? 'white' : 'black';
    });
}



// Set initial mode based on user preference
if (isDarkMode === 'true') {
    toggleMode();
}






toggle.addEventListener('click', function() {
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
        toggle.innerText = ' Light';



        toggle.addEventListener('click', function() {
            // Toggle between dark and light mode
            if (body.classList.contains('dark-mode')) {
                enableLightMode();
            } else {
                enableDarkMode();
            }
        }); 
        // Change nav links text color to black
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.style.color = 'black';
            // Change nav links, <i> icons and <a> tags text color to black
        const elementsToChange = document.querySelectorAll('.nav a, i, a');
        elementsToChange.forEach(element => {
        element.style.color = 'black';
            });
        });
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';
        toggle.innerText = ' Dark';
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '1s';
        toggle.innerText = ' Dark';
   
        // Change nav links text color to white
        const navLinks = document.querySelectorAll('.nav a');
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
        // Change nav links, <i> icons and <a> tags text color to white
        const elementsToChange = document.querySelectorAll('.nav a, i, a');
        elementsToChange.forEach(element => {
            element.style.color = 'white';     
        });
    }
});*/
/*
        
      
    } else {
      
   
                });
            }
        });
    }
});


const toggle = document.getElementById('toggle-btn');
const body = document.querySelector('body');


toggle.addEventListener('click', function() {
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '1s';
        toggle.innerText = ' Light';

       
     //adding event lisyener to the toggle button 
toggle.addEventListener('click', toggleMode);   
        
// Define the functions to enable and disable dark mode
function enableDarkMode() {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
    toggle.innerText = 'Dark';
}

// Define the functions to enable and disable light mode
function enableLightMode() {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
    toggle.innerText = 'Light';
}
        
    // Set initial mode based on user preference
isDarkMode === 'true' ? enableDarkMode() : enableLightMode();    
        
        
        
        
        
        
        */